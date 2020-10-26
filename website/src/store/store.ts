import { CaseReducer, configureStore } from "@reduxjs/toolkit";
import { main } from "./slices/main";
import createSagaMiddleware from "redux-saga";
import { all, call, spawn } from "redux-saga/effects";
import { saga as serviceWorkerRootSaga } from "./slices/notifications/saga";
import { RootState } from "./type";
import { notifications } from "./slices/notifications/slice";
import { Reducer } from "react";

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  [main.name]: main.reducer,
  [notifications.name]: notifications.reducer,
};
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

function* rootSaga() {
  const sagas = [serviceWorkerRootSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}

sagaMiddleware.run(rootSaga);
