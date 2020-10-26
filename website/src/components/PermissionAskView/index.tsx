import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React, { FC, useCallback } from "react";
import { useAppDispatch } from "../../store/useAppDispatch";
import { requestNotificationPermission } from "../../store/slices/notifications/actions";
import { useSelector } from "react-redux";
import { notifications } from "../../store/slices/notifications/slice";
import { getShowRequestNotificationPermissionView } from "../../store/slices/notifications/selectors";

export const PermissionAskView: FC = (props) => {
  const show = useSelector(getShowRequestNotificationPermissionView);

  const dispatch = useAppDispatch();
  const onClick = useCallback(() => {
    dispatch(requestNotificationPermission());
    dispatch(
      notifications.actions.setShowRequestNotificationPermissionView(false)
    );
  }, []);

  return (
    <Dialog open={show}>
      <DialogTitle>Notification request</DialogTitle>

      <DialogContent>
        <DialogContentText>
          To receive notifications, you'll have to grant us permission.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClick}>Grant permission</Button>
      </DialogActions>
    </Dialog>
  );
};
