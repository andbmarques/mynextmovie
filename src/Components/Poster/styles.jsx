import styled from "styled-components";

export const ItemContainerLink = styled.a`
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    padding-bottom: ${ props => props.similar ? '0' : '1rem' };;
    border: 1px solid rgba(53, 54, 73, 0.6);
    min-height: ${ props => props.similar ? '303px' : '503px' };
    max-height: ${ props => props.similar ? '303px' : '503px' };
    max-width: ${ props => props.similar ? '203px' : '303px' };
    min-width: ${ props => props.similar ? '203px' : '303px' };
    overflow: hidden;
    position: relative;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemCover = styled.img`
    width: 100%;
    min-height: ${ props => props.similar ? 'auto' : '303px' };
    object-fit: ${ props => props.similar ? 'cover' : 'contain' };
`;

export const ItemTitle = styled.p`
    text-align: center;
    display: ${ props => props.similar ? 'none' : 'flex' };
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
