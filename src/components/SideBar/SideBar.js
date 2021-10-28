import React from 'react'
import { 
    SidebarContainer, 
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarStyledElements';


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="" onClick={toggle} >Home</SidebarLink>
                        <SidebarLink to="/art" onClick={toggle} >Projects</SidebarLink>
                        <SidebarLink to="/aboutMe" onClick={toggle} >About Me</SidebarLink>
                        {/* <SidebarLink to="/project" onClick={toggle} >Current Project</SidebarLink> */}
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar