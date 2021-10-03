import React from 'react';
import { AboutBody, AboutCountainer, AboutHeader, AboutImage, AboutSubHead, HomeContentContainer } from './AboutElements';
import OfMe from '../../assets/PicOfMe.jpg'

export default function About(){
    return (
    <HomeContentContainer>
        <AboutImage src={OfMe} alt="Pic of Taylor Larson"/>
        <AboutCountainer>
            <AboutHeader>A little More About Me...</AboutHeader>
            <AboutSubHead>Im Taylor Larson and I'm a Woodworker.</AboutSubHead>
            <AboutBody>This is the body of my about section...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque diam, volutpat vel enim vel, rutrum condimentum enim. Nullam congue, lectus a iaculis gravida, sem odio euismod eros, et vulputate purus diam quis lectus. Donec condimentum nisi et porttitor ullamcorper. Suspendisse eleifend elit ornare augue vulputate, in pulvinar sem sodales. Phasellus egestas ex sed sodales malesuada. Phasellus ut sollicitudin dui. Praesent libero dolor, aliquet et blandit sollicitudin, lacinia ut ligula. Proin lacinia nunc a mauris commodo efficitur eget vitae nisl. Fusce lobortis, dolor at sagittis semper, augue nibh iaculis turpis, a hendrerit magna enim quis lacus. Etiam pretium enim in metus rutrum malesuada. Suspendisse ultrices erat mollis turpis sollicitudin porta. Maecenas est lectus, fermentum vel tristique eu, scelerisque nec diam. Nunc a quam in tellus vulputate eleifend. Etiam mattis, nulla id iaculis posuere, lacus tellus faucibus enim, quis interdum enim leo sit amet velit. Fusce vitae magna et eros placeraLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque diam, volutpat vel enim vel, rutrum condimentum enim. Nullam congue, lectus a iaculis gravida, sem odio euismod eros, et vulputate purus diam quis lectus. Donec condimentum nisi et porttitor ullamcorper. Suspendisse eleifend elit ornare augue vulputate, in pulvinar sem sodales. Phasellus egestas ex sed sodales malesuada. Phasellus ut sollicitudin dui. Praesent libero t laoreet.</AboutBody>
        </AboutCountainer>
    </HomeContentContainer>
        )
}