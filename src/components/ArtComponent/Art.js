import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../client.js';

import { PageContainer } from '../UniversalStyledElements';

//Art is all of the art, and artwork is the single peice of art!

export default function Art(){
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title, 
                slug, 
                mainImage{
                    asset->{
                            _id,
                            url
                    }, 
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error)})




    return (
    <PageContainer>
        <main>
            <section>
                <h1>Art Page</h1>
                <h2>Welcome to my page of art peices</h2>
                <div>
                    {postData && postData.map((art, index)=>(
                    <article key={art.slug}>
                    <Link to={`/art/:${art.slug.current}`} key={art.slug.current}>
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
                        </span>
                    </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    </PageContainer>
    )
}