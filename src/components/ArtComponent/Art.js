import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import sanityClient from '../../client.js';
import BlockContent from '@sanity/block-content-to-react';

import { PageContainer } from '../UniversalStyledElements';

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
<div>
    <h1>Loading...</h1>
</div>
    )
}




    return (
    <PageContainer>
        <main>
            <section>
                <h1>Art Page</h1>
                <h2>Welcome to my page of art peices</h2>
                <div>
                    {postData && postData.map((art, index)=>(
                    <article key={art.slug.current}>
                        <span>
                            <img 
                                src={art.mainImage.asset.url}
                                alt={art.mainImage.alt}
                            />
                        </span>
                        <span >
                            <h3>
                                {art.title}
                            </h3>
                            <div>
                            <BlockContent blocks={art.body} projectId="6tkjpda9" dataset="production"/>
                            </div>
                        </span>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    </PageContainer>
    )
}

// This code is to add our slugs in when we are able to...Maybe in v2.0
/* <Link to={`/art/:${art.slug.current}`} key={art.slug.current}></Link> */