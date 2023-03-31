import { Menu, MenuItem } from "@szhsin/react-menu";
import React, { useEffect, useState } from "react";
import api from "../../api";
import { Container,HeaderContainer, HeaderOrderButton, HeaderTitle, ItemsCOntainer } from "./styles";
import "@szhsin/react-menu/dist/index.css";
import { DotsThree, DotsThreeVertical, Star } from "phosphor-react";
import { Poster } from "../../Components/Poster";

const Home = () => {

    const [ trendingsData, setTrendingsData ] = useState();
    const [ show, setShow ] = useState('movie')

    useEffect(() => {
        api.get(`/trending/${show}/week?api_key=${import.meta.env.VITE_API_KEY}`)
        .then(result => {
            if (result) setTrendingsData(result.data)
        })
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
                        <Poster item={item} key={index} isMovie={show === 'movie' ? true : false} />
                    )
                })
            }
            </ItemsCOntainer>
        </Container>
    )
}

export default Home;