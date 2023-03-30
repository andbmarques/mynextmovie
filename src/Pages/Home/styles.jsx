import { MenuButton } from "@szhsin/react-menu";
import { Star } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

export const ItemsCOntainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ItemContainerLink = styled.a`
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    padding-bottom: 1rem;
    border: 1px solid rgba(53, 54, 73, 0.6);
    min-height: 503px;
    max-height: 503px;
    max-width: 303px;
    min-width: 303px;
    overflow: hidden;
    position: relative;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemCover = styled.img`
    width: 100%;
    min-height: 300px;
`;

export const ItemTitle = styled.p`
    text-align: center;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        padding: 0 3rem;
    }
`;

export const HeaderTitle = styled.h3`
    display: flex;
    align-items: center;
    gap: 0.2rem;
`;

export const HeaderOrderButton = styled(MenuButton)`
    border: 1px solid rgba(53, 54, 73, 0.6);
    outline: 0;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.2rem;
    background-color: #101319;
    color: white;
    cursor: pointer;
`;

export const ItemRatingContainer = styled.div`
    position: absolute;
    z-index: 99;
    top: 0.5rem;
    right: 0.5rem;
    display: flex;
    font-size: 14px;
    gap: 0.2rem;
    text-shadow: 1px 1px 2px #000000;
    color: #F8F32B;
`;

export const ItemRatingText = styled.p``;
