import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { MediaGrid } from "./components/MediaGrid";
import { Footer } from "../Footer";

export const MediaGridView: FC = (props) => {
  return (
    <Root>
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
