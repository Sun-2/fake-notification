import React, {FC, useState} from "react";
import styled from "styled-components";
import facebook from "../../../../assets/mediaIcons/facebook.svg";
import instagram from "../../../../assets/mediaIcons/instagram.svg";
import snapchat from "../../../../assets/mediaIcons/snapchat.svg";
import twitter from "../../../../assets/mediaIcons/twitter.svg";
import { SupportedMedia } from "../../../../supportedMedia";
import { useAppDispatch } from "../../../../store/useAppDispatch";
import { pushNotification } from "../../../../store/serviceWorker/actions";

const srcMapping = {
  facebook,
  instagram,
  snapchat,
  twitter,
};

export type MediaButtonProps = {
  media: SupportedMedia;
};

export const MediaButton: FC<MediaButtonProps> = (props) => {
  const { ...rest } = props;
  const dispatch = useAppDispatch();

  const onClick = () => dispatch(pushNotification(props.media));

  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Root onClick={onClick}>
      <Div>
        <img
          onLoad={() => console.log("loaded")}
          src={srcMapping[props.media as keyof typeof srcMapping]}
          alt={props.media}
        />
      </Div>
    </Root>
  );
};

const Root = styled.div`
  padding-top: 100%;
  width: 100%;
  align-self: stretch;
  justify-self: stretch;

  transition: transform 0.1s ease-out;
  &:active {
    transform: scale(1.05);
  }
  position: relative;
`;

const Div = styled.div`
  border: 4px dashed black;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8%;
  position: absolute;
`;
