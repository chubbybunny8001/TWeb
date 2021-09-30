import React from 'react';
import LogoImg from '../../assets/tayweb.jpg';
import Wood1 from '../../assets/wood1.jpg';
import Wood2 from '../../assets/wood2.jpg';
import { Content3, ContentContainer, ContentContainerImg1, ContentContainer2, ContentContainer3, LogoImage, SidebarBody, SidebarContent, SidebarContentContainer, ContactSquare, SidebarHead, SidebarSubHead, ContentContainerImg2 } from './HomeElements';
export default function Home(){
    return (
<ContentContainer>
        <LogoImage src={LogoImg} />
        <SidebarContent>
            <SidebarContentContainer>
                <SidebarHead>Hello</SidebarHead>
                <SidebarSubHead>I am Taylor Larson!
                </SidebarSubHead>
                <SidebarBody>I do residential, personal Wood Repair and touch-up.</SidebarBody>
            </SidebarContentContainer>
        </SidebarContent>
        <ContentContainerImg1 src={Wood1} alt="Woodworking Img"/>
        <ContentContainerImg2 src={Wood2} alt="Woodworking2 Img"/>
        <ContentContainer3>
            <Content3>Contact me at:</Content3>
            <ContactSquare>Email: Blank.Blank@gmail.com</ContactSquare>
            <ContactSquare>Phone: 000-000-0000</ContactSquare>
            <ContactSquare></ContactSquare>
        </ContentContainer3>

</ContentContainer>
        )
}