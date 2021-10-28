import React from 'react';
import { FootContainer, FooterClickable, WebsiteRights } from './FooterElements';

export default function Footer(){
    return (
                <FootContainer className="foot">
                    <FooterClickable href="mailto:TayorStone8080@gmail.com?Subject=I Have A Project" target="_blank" sub>Email: TaylorStone8080@gmail.com</FooterClickable>
                    <WebsiteRights>Taylor Larson © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <FooterClickable href="tel:4062234784">Call: (406) 223-4784</FooterClickable>
                </FootContainer>
)}