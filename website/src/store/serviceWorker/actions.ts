import {createAction} from "@reduxjs/toolkit";
import {SupportedApp} from "../../SupportedApp";

export const pushNotification = createAction<SupportedApp>("make-notification");