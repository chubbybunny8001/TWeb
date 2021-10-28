import React from 'react';
import LogoImg from '../../assets/tayweb.jpg';
import {ContactClickable, ContentContainer, HeadingsContainer, HeadingsContainer2, Image, ImageContainer, TextBox1, TextBox2, TextBox2H2, TextBoxH1, TextBoxH2, TextBoxH3, TextContainer} from './HomeElements';
export default function Home(){
    return (
<ContentContainer>
    <TextContainer>
        {/* Text Box 1 */}
            <TextBox1>
                <HeadingsContainer>
                    <TextBoxH1>
                        Welcome to
                    </TextBoxH1>
                    <TextBoxH2>
                        Taylor Larson Wood <br /> Repair & Touch Up.
                    </TextBoxH2>
                </HeadingsContainer>
            </TextBox1>
        {/* Text Box 2 */}
            <TextBox2>
                <HeadingsContainer2>
                    <TextBox2H2>
                        Need Work Done? <br/> Contact Me at:
                    </TextBox2H2>
                    <TextBoxH3>
                    Phone: <br /> <ContactClickable href="tel:4062234784">(406) 223-4784</ContactClickable><br />
                    Email: <br /> <ContactClickable href="mailto:TayorStone8080@gmail.com?Subject=I Have A Project" target="_blank" sub>TaylorStone8080@gmail.com</ContactClickable>
                    </TextBoxH3>
                </HeadingsContainer2>
            </TextBox2>
    </TextContainer>
        {/* Business Logo... */}
    <ImageContainer>
        <Image src={LogoImg}  alt="busin pic" />
    </ImageContainer>
</ContentContainer>
        )
}