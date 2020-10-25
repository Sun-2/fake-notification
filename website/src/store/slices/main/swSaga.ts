import { main } from "./index";
import { call, fork, put, takeEvery } from "redux-saga/effects";

function* notificationRequestWatcher(registration: ServiceWorkerRegistration, action) {
  yield take;
}

export function* swSaga() {
  try {
    const not = yield call([Notification, Notification.requestPermission]);

    if ("serviceWorker" in navigator) {
      const registration = yield call(
        [navigator.serviceWorker, navigator.serviceWorker.register],
        "sw.js"
      );

      registration.showNotification("New stories", {
        icon: "https://i.imgur.com/NuxMX9p.png",
        badge: "https://i.imgur.com/NuxMX9p.png",
      });

      registration.showNotification("You got new snaps", {
        icon: "https://i.imgur.com/J3isAGP.png",
        badge: "https://i.imgur.com/J3isAGP.png",
      });

      yield fork(function* () {
        yield takeEvery("asd", notificationRequestWatcher, registration);
      });
    } else {
      /* SW unavailable */
      yield put(main.actions.setServiceWorkerStatus("error"));
    }
  } catch (e) {}
}
