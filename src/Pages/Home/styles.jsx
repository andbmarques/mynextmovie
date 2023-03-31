import { MenuButton } from "@szhsin/react-menu";
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
