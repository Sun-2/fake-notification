import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@material-ui/core";
import React, { FC, useCallback } from "react";
import { useAppDispatch } from "../../store/useAppDispatch";
import { requestNotificationPermission } from "../../store/serviceWorker/actions";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getShowRequestNotificationPermissionView } from "../../store/slices/main/selectors";
import {main} from "../../store/slices/main";

export const PermissionAskView: FC = (props) => {
  const show = useSelector(getShowRequestNotificationPermissionView);

  const dispatch = useAppDispatch();
  const onClick = useCallback(() => {
    dispatch(requestNotificationPermission());
    dispatch(main.actions.setShowRequestNotificationPermissionView(false));
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
