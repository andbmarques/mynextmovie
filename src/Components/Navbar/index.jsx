import React from "react";
import { CollectionsNav, Container, LogoContainer, LogoIcon, LogoText, LogoContainerLink } from "./styles";

const Navbar = () => {
    return (
        <Container>
            <LogoContainerLink href='/'>
                <LogoContainer>
                    <LogoIcon weight="duotone" />
                    <LogoText>MyNextMovie</LogoText>
                </LogoContainer>
            </LogoContainerLink>
            <CollectionsNav href="/collections">
                Collections
            </CollectionsNav>
        </Container>
    )
}

export default Navbar;