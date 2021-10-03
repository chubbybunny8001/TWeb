import React from 'react';
import LogoImg from '../../assets/tayweb.jpg';
import Wood1 from '../../assets/wood1.jpg';
import Wood2 from '../../assets/wood2.jpg';
import { Content3, ContentContainer, ContentContainerImg1, ContentContainer3, LogoImage, SidebarBody, SidebarContent, SidebarContentContainer, ContactSquare, SidebarHead, SidebarSubHead, ContentContainerImg2 } from './HomeElements';
export default function Home(){
    return (
<ContentContainer>
        <LogoImage src={LogoImg} />
        <SidebarContent>
            <SidebarContentContainer>
                <SidebarHead>Welcome</SidebarHead>
                <SidebarSubHead>Need some work done?</SidebarSubHead>
                <SidebarBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque diam, volutpat vel enim vel, rutrum condimentum enim. Nullam congue, lectus a iaculis gravida, sem odio euismod eros, et vulputate purus diam quis lectus. Donec condimentum nisi et porttitor ullamcorper. Suspendisse eleifend elit ornare augue vulputate, in pulvinar sem sodales. Phasellus egestas ex sed sodales malesuada. Phasellus ut sollicitudin dui. Praesent libero dolor, aliquet et blandit sollicitudin, lacinia ut ligula. Proin lacinia nunc a mauris commodo efficitur eget vitae nisl. Fusce lobortis, dolor at sagittis semper, augue nibh iaculis turpis, a hendrerit magna enim quis lacus. Etiam pretium enim in metus rutrum malesuada. Suspendisse ultrices erat mollis turpis sollicitudin porta. Maecenas est lectus, fermentum vel tristique eu, scelerisque nec diam. Nunc a quam in tellus vulputate eleifend. Etiam mattis, nulla id iaculis posuere, lacus tellus faucibus enim, quis interdum enim leo sit amet velit. Fusce vitae magna et eros placerat laoreet.</SidebarBody>
            </SidebarContentContainer>
        </SidebarContent>
        <ContentContainerImg1 src={Wood1} alt="Woodworking Img"/>
        <ContentContainerImg2 src={Wood2} alt="Woodworking2 Img"/>
        <ContentContainer3>
            <Content3>Contact me at:</Content3>
            <ContactSquare>Email: Blank.Blank@gmail.com</ContactSquare>
            <ContactSquare>Phone: 000-000-0000</ContactSquare>
            <ContactSquare>LinkedIn: blankblankblank/LinkedIn.com</ContactSquare>
            <ContactSquare>Instagram: @TaylorLarson80</ContactSquare>
            <ContactSquare>Facebook: Taylor Larson</ContactSquare>
        </ContentContainer3>

</ContentContainer>
        )
}