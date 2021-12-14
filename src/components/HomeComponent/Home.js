import React from "react";
import {
  ContentContainer,
  HomeCoverAnimationBlock,
  HomeCoverAnimationBlock2,
  HomeCoverAnimationColumn,
  HomeCoverAnimationColumn2,
  HomeCoverAnimationHeader,
  HomeCoverAnimationHeader2,
  HomePageContent,
} from "./HomeElements";

export default function Home() {
  return (
    <ContentContainer>
      {/*Taylor Larson
        Phone:tel:4062234784 (406) 223-4784
        Email:mailto:TayorStone8080@gmail.com?Subject=***I Have A Project For You***" target="_blank">TaylorStone8080@gmail.com
       */}
      <HomePageContent></HomePageContent>
      <HomeCoverAnimationBlock className="needsAnimation">
        <HomeCoverAnimationHeader className="needsAnimation">
          Welcome To...
        </HomeCoverAnimationHeader>
      </HomeCoverAnimationBlock>
      <HomeCoverAnimationBlock2 className="needsAnimation">
        <HomeCoverAnimationHeader2 className="needsAnimation">
          Taylor Larson Artwork
        </HomeCoverAnimationHeader2>
      </HomeCoverAnimationBlock2>
      <HomeCoverAnimationColumn className="needsAnimation"></HomeCoverAnimationColumn>
      <HomeCoverAnimationColumn2 className="needsAnimation"></HomeCoverAnimationColumn2>
    </ContentContainer>
  );
}
