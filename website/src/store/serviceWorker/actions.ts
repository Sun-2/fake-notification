import { createAction } from "@reduxjs/toolkit";
import { SupportedMedia } from "../../supportedMedia";

export const pushNotification = createAction<SupportedMedia>(
  "make-notification"
);
