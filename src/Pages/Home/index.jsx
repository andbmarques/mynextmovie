import { Menu, MenuItem } from "@szhsin/react-menu";
import React, { useEffect, useState } from "react";
import api from "../../api";
import { Container,HeaderContainer, HeaderOrderButton, HeaderTitle, ItemContainerLink, ItemCover, ItemRatingContainer, ItemRatingText, ItemsCOntainer, ItemTitle } from "./styles";
import "@szhsin/react-menu/dist/index.css";
import { DotsThree, DotsThreeVertical, Star } from "phosphor-react";

const Home = () => {

    const [ trendingsData, setTrendingsData ] = useState();
    const [ show, setShow ] = useState('movie')

    useEffect(() => {
        api.get(`/trending/${show}/week?api_key=${import.meta.env.VITE_API_KEY}`)
        .then(result => {
            if (result) setTrendingsData(result.data)
        })
        .then(() => console.log(trendingsData.results))
    }, [show]);

    return (
        <Container>
            <HeaderContainer>
                <HeaderTitle> <Star weight="fill" color="white" size={16} /> Trending { show === 'movie' ? 'Movies' : 'Tv Shows' }</HeaderTitle>
                <Menu align="end" menuButton={<HeaderOrderButton><DotsThree weight="bold" /></HeaderOrderButton>}>
                    <MenuItem onClick={() => setShow('movie')}>Movies</MenuItem>
                    <MenuItem onClick={() => setShow('tv')} >Shows</MenuItem>
                </Menu>
            </HeaderContainer>
            <ItemsCOntainer>
            {
                trendingsData && trendingsData.results.map((item, index) => {
                    return (
                        <ItemContainerLink href={ show === 'movie' ? `/movie/${item.id}` : `/tv/${item.id}` } key={index}>
                            <ItemRatingContainer>
                                <Star weight="fill" />
                                <ItemRatingText>{item.vote_average.toFixed(1)}</ItemRatingText>
                            </ItemRatingContainer>
                            <ItemCover src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                            <ItemTitle>{ show === 'movie' ? item.original_title : item.name }</ItemTitle>
                        </ItemContainerLink>
                    )
                })
            }
            </ItemsCOntainer>
        </Container>
    )
}

export default Home;