import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import sanityClient from '../../client.js';

import { PageContainer } from '../UniversalStyledElements';
import { ArtworkBlock, ArtworkBlockCont, ArtworkBodyCont, ArtworkContainer, ArtworkHead, ArtworkImg, ArtworkPageHead, ArtworkPageHeading, ArtworkPageSubHead, Artworks } from './ArtElements.js';

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

// if(!postData){
//     return (
// <div>
//     <h1>Loading...</h1>
// </div>
//     )
// }




    return (
    <PageContainer>
        <ArtworkContainer>
            <ArtworkPageHeading>
                <ArtworkPageHead>Projects Page</ArtworkPageHead>
                <ArtworkPageSubHead>Welcome to my page of past projects</ArtworkPageSubHead>
            </ArtworkPageHeading>
            
            <ArtworkContainer>
            <Artworks>
                        <ArtworkImg 
                            src=''
                            alt='artPicture'
                        />
                        <ArtworkBodyCont>
                            <ArtworkHead>
                                Test 1
                            </ArtworkHead>
                            <ArtworkBlockCont>
                            <ArtworkBlock>Here is my paragraph...</ArtworkBlock>
                            </ArtworkBlockCont>
                        </ArtworkBodyCont>
                </Artworks>
                {postData && postData.map((art, index)=>(
                <Artworks key={art.slug.current}>
                        <ArtworkImg 
                            src={art.mainImage.asset.url}
                            alt={art.mainImage.alt}
                        />
                        <ArtworkBodyCont>
                            <ArtworkHead>
                                {art.title}
                            </ArtworkHead>
                            <ArtworkBlockCont>
                            <ArtworkBlock blocks={art.body} projectId="6tkjpda9" dataset="production"/>
                            </ArtworkBlockCont>
                        </ArtworkBodyCont>
                </Artworks>
                    ))}
                </ArtworkContainer>
        </ArtworkContainer>
    </PageContainer>
    )
}

// This code is to add our slugs in when we are able to...Maybe in v2.0
/* <Link to={`/art/:${art.slug.current}`} key={art.slug.current}></Link> */