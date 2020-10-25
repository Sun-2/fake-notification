import { main } from "../slices/main";
import {
  actionChannel,
  call,
  fork,
  put,
  take,
  takeEvery,
} from "redux-saga/effects";
import { pushNotification } from "./actions";
import snapchatBadge from "../../assets/notificationBadges/snapchat.png";
import instagramBadge from "../../assets/notificationBadges/instagram.png";
import facebookBadge from "../../assets/notificationBadges/facebook.png";

function* notificationRequestWatcher(
  registration: ServiceWorkerRegistration,
  action: ReturnType<typeof pushNotification>
) {
  switch (action.payload) {
    case "instagram":
      return registration.showNotification("Instagram", {
        icon: instagramBadge,
        badge: instagramBadge,
      });
    case "snapchat":
      return registration.showNotification("Snapchat", {
        icon: snapchatBadge,
        badge: snapchatBadge,
      });
    case "facebook":
      return registration.showNotification("Facebook", {
        icon: facebookBadge,
        badge: facebookBadge,
      });
  }
}

export function* saga() {
  const notificationRequestChannel = yield actionChannel(pushNotification.type);
  try {
    const notificationPermission = yield call([
      Notification,
      Notification.requestPermission,
    ]);

    if (notificationPermission === "denied") {
      yield put(main.actions.setServiceWorkerStatus("no-permission"));
    }

    if ("serviceWorker" in navigator) {
      const registration = yield call(
        [navigator.serviceWorker, navigator.serviceWorker.register],
        "sw.js"
      );

      yield fork(function* () {
        yield takeEvery(
          notificationRequestChannel,
          notificationRequestWatcher,
          registration
        );
      });

      yield put(main.actions.setServiceWorkerStatus("ready"));
    } else {
      /* SW unavailable */
      yield put(main.actions.setServiceWorkerStatus("not-supported"));
    }
  } catch (e) {}
}
