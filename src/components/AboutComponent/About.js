import React from 'react';
import { AboutBody, AboutCountainer, AboutHeader, AboutImage, AboutImageContiner, AboutSubHead, AboutContentContainer, AboutContentSpacer, BodyContainer } from './AboutElements';
import OfMe from '../../assets/PicOfMe.jpg'

export default function About(){
    return (
    <AboutContentContainer>
            <AboutImageContiner>
                <AboutImage src={OfMe} alt="Pic of Taylor Larson"/>
            </AboutImageContiner>
            
            <AboutCountainer>
                <BodyContainer>
                    <AboutHeader>A little More About Me...</AboutHeader>
                    <AboutSubHead>Woodworker by Day & Artist by Night</AboutSubHead>
                
                    <AboutBody>In my spare time I am an artist. I enjoy oil painting and sketching with pastels. 
                        Preferably I paint photorealistic portraits or landscapes, but I enjoy most kinds of art as well. 
                        I like looking at the fine details that make a piece what it is, chaos on a smaller level creates harmony on a larger level!
                    </AboutBody>
                </BodyContainer>
            </AboutCountainer>
    </AboutContentContainer>
        )
}