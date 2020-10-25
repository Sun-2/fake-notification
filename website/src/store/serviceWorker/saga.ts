import { main } from "../slices/main";
import {
  actionChannel,
  call,
  fork,
  put,
  take,
  takeEvery,
} from "redux-saga/effects";
import { pushNotification, requestNotificationPermission } from "./actions";
import snapchatBadge from "../../assets/notificationBadges/snapchat.png";
import instagramBadge from "../../assets/notificationBadges/instagram2.png";
import facebookBadge from "../../assets/notificationBadges/facebook.png";

const badgeMappings = {
  instagram: instagramBadge,
  facebook: facebookBadge,
  snapchat: snapchatBadge,
} as const;

function* notificationRequestWatcher(
  registration: ServiceWorkerRegistration,
  action: ReturnType<typeof pushNotification>
) {
  if (Notification.permission === "default") {
    /* todo ask for notification permission */
    yield put(main.actions.setShowRequestNotificationPermissionView(true));
    yield take(requestNotificationPermission.type);
    yield call([Notification, Notification.requestPermission]);
  }
  if (Notification.permission === "denied") {
    /* todo display no permission notification */
    return yield put(main.actions.setServiceWorkerStatus("no-permission"));
  }

  return yield call(
    [registration, registration.showNotification],
    "Instagram",
    {
      badge: badgeMappings[action.payload as keyof typeof badgeMappings],
    }
  );
}

export function* saga() {
  const notificationRequestChannel = yield actionChannel(pushNotification.type);
  try {
    if (!("serviceWorker" in navigator))
      return yield put(main.actions.setServiceWorkerStatus("not-supported"));

    if (Notification.permission === "denied")
      return yield put(main.actions.setServiceWorkerStatus("no-permission"));

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
  } catch (e) {
    return yield put(main.actions.setServiceWorkerStatus("not-supported"));
  }
}
