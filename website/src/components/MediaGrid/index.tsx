import React, { FC } from "react";
import { supportedMedia } from "../../supportedMedia";
import { MediaButton } from "./components/MediaButton";
import styled from "styled-components";
import { media } from "../../styles/media";

export const MediaGrid: FC = () => {
  return (
    <Root>
      <Grid>
        {supportedMedia.map((media) => (
          <MediaButton media={media} />
        ))}
      </Grid>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  grid-gap: ${({ theme }) => theme.spacing(2)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  max-width: 966px;
  width: 100%;


`;
