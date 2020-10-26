import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { MediaGrid } from "./components/MediaGrid";
import { Footer } from "../Footer";
import { useSelector } from "react-redux";
import {
  getNotificationPermission,
  getServiceWorkerStatus,
} from "../../store/slices/notifications/selectors";
import { SwNotSupported } from "../SwNotSupported";
import { NoNotificationPermission } from "../NoNotificationPermission";

export const MediaGridView: FC = (props) => {
  const swStatus = useSelector(getServiceWorkerStatus);
  const notificationPermission = useSelector(getNotificationPermission);

  return (
    <Root>
      {swStatus === "not-supported" && <SwNotSupported />}
      {notificationPermission === "denied" && <NoNotificationPermission />}
      <MediaGrid />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Root>
  );
};

const FooterWrapper = styled.div`
  align-self: stretch;
  margin-top: auto;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
