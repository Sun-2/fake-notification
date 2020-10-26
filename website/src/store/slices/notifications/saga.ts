import {
  actionChannel,
  call,
  fork,
  put,
  take,
  takeEvery,
} from "redux-saga/effects";
import { pushNotification, requestNotificationPermission } from "./actions";
import snapchatBadge from "../../../assets/notificationBadges/snapchat.png";
import instagramBadge from "../../../assets/notificationBadges/instagram2.png";
import facebookBadge from "../../../assets/notificationBadges/facebook.png";
import twitterBadge from "../../../assets/notificationBadges/twitter.png";
import { SupportedMedia } from "../../../supportedMedia";
import { notifications } from "./slice";

const badgeMappings: Record<SupportedMedia, string> = {
  instagram: instagramBadge,
  facebook: facebookBadge,
  snapchat: snapchatBadge,
  twitter: twitterBadge,
};

function* notificationRequestWatcher(
  registration: ServiceWorkerRegistration,
  action: ReturnType<typeof pushNotification>
) {
  if (Notification.permission === "default") {
    yield put(
      notifications.actions.setShowRequestNotificationPermissionView(true)
    );
    yield take(requestNotificationPermission.type);
    yield call([Notification, Notification.requestPermission]);
  }
  if (Notification.permission === "denied") {
    return yield put(notifications.actions.setNotificationPermission("denied"));
  }

  const iconSrc = badgeMappings[action.payload];
  return yield call(
    [registration, registration.showNotification],
    action.payload,
    {
      badge: iconSrc,
      icon: iconSrc,
    }
  );
}

export function* saga() {
  const notificationRequestChannel = yield actionChannel(pushNotification.type);
  try {
    if (!("serviceWorker" in navigator))
      return yield put(
        notifications.actions.setServiceWorkerStatus("not-supported")
      );

    if (Notification.permission === "denied")
      return yield put(
        notifications.actions.setNotificationPermission("denied")
      );

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

    yield put(notifications.actions.setServiceWorkerStatus("ready"));
  } catch (e) {
    return yield put(
      notifications.actions.setServiceWorkerStatus("not-supported")
    );
  }
}
