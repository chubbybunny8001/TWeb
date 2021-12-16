import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import sanityClient from "../../client.js";

import {
  BodyCont,
  ImgCont,
  NoProjectsCont,
  NoProjectsText,
  ProjectsContentContainer,
  ProjectsHeading,
  ProjectsHeadingContainer,
  Slide,
  SlideBody,
  SlideBodyCont,
  SlideImg,
  SlideImgCont,
  SlideShow,
  SlideShowSlider,
  SlideTitle,
  Spacer,
} from "./ArtElements.js";

//Art is all of the art, and artwork is the single peice of art!

export default function Art() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    let isUnmount = false;
    sanityClient
      .fetch(
        `*[_type == "artwork"]{
                title, 
                slug,
                body,
                mainImage{
                    asset->{
                            _id,
                            url
                    }, 
                    alt
                }
            }`
      )
      .then((data) => {
        if (!isUnmount) {
          console.log(data);
          console.log("this all the artworks fetched...");
          setPost(data);
        }
      })
      .catch(console.error);

    return () => {
      isUnmount = true;
    };
  }, []);

  if (!postData) {
    return (
      <NoProjectsCont>
        <NoProjectsText>Loading Recent Artworks...</NoProjectsText>
      </NoProjectsCont>
    );
  }
  return (
    <ProjectsContentContainer>
      <ProjectsHeadingContainer>
        <ProjectsHeading>My Recent Projects</ProjectsHeading>
      </ProjectsHeadingContainer>
      <Spacer></Spacer>
      <SlideShow>
        <SlideShowSlider>
          {postData &&
            postData.map((art, index) => (
              <Slide key={art.slug.current}>
                <SlideImgCont>
                  <ImgCont>
                    <SlideImg
                      src={art.mainImage.asset.url}
                      alt={art.mainImage.alt}
                    />
                  </ImgCont>
                </SlideImgCont>
                <SlideBodyCont>
                  <BodyCont>
                    <SlideTitle>{art.title}</SlideTitle>
                    <SlideBody
                      blocks={art.body}
                      projectId="6tkjpda9"
                      dataset="production"
                    />
                  </BodyCont>
                </SlideBodyCont>
              </Slide>
            ))}
        </SlideShowSlider>
      </SlideShow>
    </ProjectsContentContainer>
  );
}
// This code is to add our slugs in when we are able to...Maybe in v2.0
/* <Link to={`/art/:${art.slug.current}`} key={art.slug.current}></Link> */
