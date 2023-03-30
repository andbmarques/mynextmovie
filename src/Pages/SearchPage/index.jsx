import { Star } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";import { Container, HeaderContainer, HeaderOrderButton, HeaderTitle, ItemContainer, ItemContainerLink, ItemCover, ItemRatingContainer, ItemRatingText, ItemsCOntainer, ItemTitle } from "./styles";

const SearchPage = () => {

    let { name } = useParams();

    const [ responseData, setResponseData ] = useState();

    useEffect(() => {
        api.get(`/search/multi?api_key=${import.meta.env.VITE_API_KEY}&query=${name}`)
        .then(result => {
            if (result) setResponseData(result.data.results)
        })
    }, []);

    return (
        <Container>
            <HeaderContainer>
                <HeaderTitle>Results for {name}</HeaderTitle>
            </HeaderContainer>
            <ItemsCOntainer>
            {
                responseData && responseData.map((item, index) => {
                    return (
                        <ItemContainerLink href={item.media_type === 'tv' ? `/tv/${item.id}` : `/movie/${item.id}`} key={index}>
                            <ItemRatingContainer>
                                <Star weight="fill" />
                                <ItemRatingText>{item.vote_average.toFixed(1)}</ItemRatingText>
                            </ItemRatingContainer>
                            {
                                item.poster_path ? <ItemCover src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} /> : <></>
                            }
                            <ItemTitle>{item.title || item.name}</ItemTitle>
                        </ItemContainerLink>
                    )
                })
            }
            </ItemsCOntainer>
        </Container>
    )
}

export default SearchPage;