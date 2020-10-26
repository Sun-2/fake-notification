import React, { FC, useState } from "react";
import styled from "styled-components";
import facebook from "../../../../../../assets/mediaIcons/facebook.svg";
import instagram from "../../../../../../assets/mediaIcons/instagram.svg";
import snapchat from "../../../../../../assets/mediaIcons/snapchat.svg";
import twitter from "../../../../../../assets/mediaIcons/twitter.svg";
import { SupportedMedia } from "../../../../../../supportedMedia";
import { useAppDispatch } from "../../../../../../store/useAppDispatch";
import { pushNotification } from "../../../../../../store/slices/notifications/actions";
import { Button, CircularProgress, Fade } from "@material-ui/core";
import { media } from "../../../../../../styles/media";

const srcMapping: { [key in SupportedMedia]: string } = {
  facebook,
  instagram,
  snapchat,
  twitter,
};

export type MediaButtonProps = {
  media: SupportedMedia;
};

export const MediaButton: FC<MediaButtonProps> = (props) => {
  const dispatch = useAppDispatch();

  const onClick = () => dispatch(pushNotification(props.media));

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Root onClick={onClick}>
      <SButton>
        <SImg
          onLoad={() => setIsLoaded(true)}
          src={srcMapping[props.media as keyof typeof srcMapping]}
          alt={props.media}
          style={{ visibility: isLoaded ? "inherit" : "hidden" }}
        />
        <Fade in={!isLoaded}>
          <ProgressWrapper>
            <SCircularProgress />
          </ProgressWrapper>
        </Fade>
      </SButton>
    </Root>
  );
};

const ProgressWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const SCircularProgress = styled(CircularProgress)`
  width: 45% !important;
  height: 45% !important;
`;

const Root = styled.div`
  padding-top: 100%;
  width: 100%;

  transition: transform 0.1s ease-out;
  &:active {
    transform: scale(1.05);
  }
  position: relative;
`;

const SButton = styled(Button)`
  border: 4px dashed ${({ theme }) => theme.palette.primary.main};

  ${media.sm} {
    border-width: 8px;
  }

  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8%;
  position: absolute;
`;

const SImg = styled.img`
  width: 100%;
`;
