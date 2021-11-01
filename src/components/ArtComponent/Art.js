import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import sanityClient from '../../client.js';
import pic from '../../assets/PicOfMe.jpg';


import { BodyCont, ImgCont, NoProjectsCont, NoProjectsText, ProjectsContentContainer, ProjectsHeading, ProjectsHeadingContainer, Slide, SlideBody, SlideBodyCont, SlideImg, SlideImgCont, SlideShow, SlideShowSlider, SlideTitle } from './ArtElements.js';

var mockData = [
    {
        slug: 1,
        title: "Me 1",
        body: "Body Text",
        mainImage: { 
            asset:{
                url: pic,
                
            },
            alt: "picMock1"
        }
    },
    {
        slug: 2,
        title: "Me 2",
        body: "Body Text more text hererer  fjda;kl fdkja; fjkl;asd jfkl;ad jfkl;ds jfk;ldas jfk;lda",
        mainImage: { 
            asset:{
                url: pic,
                
            },
            alt: "picMock1"
        }
    },
    {
        slug: 3,
        title: "Me 3",
        body: "Body Text im not wordsy so here fkjad fdfksd soifdas kel fjadksfla poisf jf jadiof iodj fodajfioadj poa jfpioaj po p io jioj fiosadj fiopjfias jiopa j",
        mainImage: { 
            asset:{
                url: pic,
                
            },
            alt: "picMock1"
        }
    }
]

//Art is all of the art, and artwork is the single peice of art!

export default function Art(){
    const [postData, setPost] = useState(null);

    useEffect(() => {
        let isUnmount = false
        sanityClient.fetch(`*[_type == "artwork"]{
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
            }`)
            .then((data) => { 
                if(!isUnmount){
                console.log(data)
                console.log('this all the artworks fetched...')
                setPost(data)
            }})
            .catch(console.error)

            return() => {
                isUnmount = true;
            }
}, [])


    if(!postData){
        return (
    <NoProjectsCont>
        <NoProjectsText>No Projects Yet</NoProjectsText>
    </NoProjectsCont>
        )
    }
    return (
        <ProjectsContentContainer>
                <ProjectsHeadingContainer>
                    <ProjectsHeading>My Recent Projects</ProjectsHeading>
                </ProjectsHeadingContainer>
                <SlideShow>
                    <SlideShowSlider>
                        {postData && postData.map((art, index)=>(
                            <Slide key={art.slug.current}>  
                                <SlideImgCont>
                                    <ImgCont>
                                        <SlideImg src={art.mainImage.asset.url} alt={art.mainImage.alt} />
                                    </ImgCont>
                                </SlideImgCont>
                                <SlideBodyCont>
                                    <BodyCont>
                                        <SlideTitle>{art.title}</SlideTitle>
                                        <SlideBody blocks={art.body} projectId="6tkjpda9" dataset="production" />
                                    </BodyCont>
                                </SlideBodyCont>
                            </Slide>
                        ))}
                        </SlideShowSlider>
                    </SlideShow>
        </ProjectsContentContainer>
    )
}
// This code is to add our slugs in when we are able to...Maybe in v2.0
/* <Link to={`/art/:${art.slug.current}`} key={art.slug.current}></Link> */