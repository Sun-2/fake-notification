import React, { FC } from "react";
import { supportedMedia } from "../../../../supportedMedia";
import { MediaButton } from "./components/MediaButton";
import styled from "styled-components";


export const MediaGrid: FC = () => {
  return (
    <Grid>
      {supportedMedia.map((media) => (
        <MediaButton key={media} media={media} />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  grid-gap: ${({ theme }) => theme.spacing(2)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  max-width: 900px;
  width: 100%;
`;
