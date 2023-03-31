import { Star } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";import { Container, HeaderContainer, HeaderOrderButton, HeaderTitle, ItemsCOntainer } from "./styles";
import { Poster } from "../../Components/Poster";

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
                        <Poster item={item} key={index} />
                    )
                })
            }
            </ItemsCOntainer>
        </Container>
    )
}

export default SearchPage;