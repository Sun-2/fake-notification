import { configureStore } from "@reduxjs/toolkit";
import { main } from "./slices/main";
import createSagaMiddleware from "redux-saga";
import { all, call, spawn } from "redux-saga/effects";
import { saga as serviceWorkerRootSaga } from "./serviceWorker/saga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    [main.name]: main.reducer,
  },
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
