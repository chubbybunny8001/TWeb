import React from 'react';
import LogoImg from '../../assets/tayweb.jpg'
import {
    BodyContainer,
    BodyWords,
    ContentContainer,
    HeaderContainer,
    IndividualSocialsContainer,
    LogoContainer,
    LogoImage,
    // MainHeader,
    Socials,
    SocialsContainer,
    WordsContainer
} from './HomeElements';
import { PageContainer } from '../UniversalStyledElements';
export default function Home(){
    return (
        <PageContainer>
            <ContentContainer>
                    <LogoContainer>
                        <LogoImage  src={LogoImg}/>
                    </LogoContainer>
                <HeaderContainer>
                    {/* <MainHeader></MainHeader> */}
                </HeaderContainer>
                <BodyContainer>
                    
                    <WordsContainer>
                        <BodyWords>
                            This is my words of choice...
                        </BodyWords>
                    </WordsContainer>
                    <SocialsContainer>
                        <p>This will be our socials footer...</p>
                        <IndividualSocialsContainer>
                            <Socials /*Social Media Link 1*/ />
                        </IndividualSocialsContainer>

                        <IndividualSocialsContainer>
                            <Socials /*Social Media Link 2*/ />
                        </IndividualSocialsContainer>

                        <IndividualSocialsContainer>
                            <Socials /*Social Media Link 3*/ />
                        </IndividualSocialsContainer>
                    </SocialsContainer>
                </BodyContainer>

            </ContentContainer>
        </PageContainer>
        )
}