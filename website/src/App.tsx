import React, { FC, useEffect } from "react";
import { useAppDispatch } from "./store/useAppDispatch";
import { pushNotification } from "./store/serviceWorker/actions";

export const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(pushNotification("Snapchat"));
  }, []);
  return <p>Hello!</p>;
};
