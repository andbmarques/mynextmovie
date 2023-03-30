import { MagnifyingGlass } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
    height: 4rem;
    background-color: #15181f;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
`;

export const SearchInput = styled.input`
    outline: 0;
    border: none;
    font-size: 1rem;
    padding: 0.3rem 1rem;
    border-radius: 0.1rem;
`;

export const SearchButton = styled.a`
    outline: 0;
    border: none;
    padding: 0.45rem;
    border-radius: 0.1rem;
    background-color: #F8F32B;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;    
    text-decoration: none;
    color: black;
`;

export const SearchButtonIcon = styled(MagnifyingGlass)`
    font-size: 1rem;
`;