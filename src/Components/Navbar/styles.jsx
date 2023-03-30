import { Popcorn } from "phosphor-react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    height: 5rem;
    background-color: #101319;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;

`;

export const LogoContainerLink = styled.a`
    text-decoration: none;
    color: white
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const LogoText = styled.h1`
    font-family: 'Lobster Two', cursive;
    font-size: 1.8rem;

    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

export const LogoIcon = styled(Popcorn)`
    color: #F8F32B;
    font-size: 3rem;

    @media screen and (max-width: 768px) {
        font-size: 1.7rem;
    }
`;

export const CollectionsNav = styled.a`
    text-decoration: none;
    color: white;

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`;