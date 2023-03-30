import { Star } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import api from "../../api";
import { formatDate } from "../../Utils/formatDate";
import {
  Backdrop,
  BackdropContainer,
  Container,
  Span,
  InfosContainer,
  OtherInfosContainer,
  OtherInfosSection,
  Poster,
  RatingContainer,
  RatingIcon,
  RatingText,
  SubText,
  Title,
  Trailer,
  TrailerContainer,
  TrailerInfosContainer,
  EpisodesInfoContainer,
  EpisodesSpan,
  EpisodesTextContainer,
} from "./styles";

const ItemPage = () => {
  const { id } = useParams();
  const location = useLocation();

  const isMovie = location.pathname.indexOf("movie") === 1 ? true : false;

  const [itemData, setItemData] = useState();
  const [videos, setVideos] = useState();

  useEffect(() => {
    api
      .get(
        `/${isMovie ? "movie" : "tv"}/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((result) => {
        if (result) setItemData(result.data);
        console.log(result.data);
      });
  }, []);

  useEffect(() => {
    api
      .get(
        `/${isMovie ? "movie" : "tv"}/${id}/videos?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((result) => {
        if (result) setVideos(result.data.results);
      });
  }, []);

  return (
    <>
      {itemData && (
        <Container>
          <InfosContainer>
            <Title>{isMovie ? itemData.title : itemData.name}</Title>
            <Poster
              src={`https://image.tmdb.org/t/p/w500/${itemData.poster_path}`}
            />
          </InfosContainer>
          <BackdropContainer>
            <Backdrop
              src={`https://image.tmdb.org/t/p/w1280/${itemData.backdrop_path}`}
            />
          </BackdropContainer>
          <OtherInfosContainer>
            <OtherInfosSection>
              <Span>
                <SubText>Original Name:</SubText>
                <p>
                  {isMovie ? itemData.original_title : itemData.original_name}
                </p>
              </Span>
              <RatingContainer>
                <RatingText>
                  Rating: {itemData.vote_average.toFixed(1)}
                </RatingText>
                <RatingIcon weight="fill" />
              </RatingContainer>
            </OtherInfosSection>
            <OtherInfosSection>
              <Span>
                <SubText>Genres: </SubText>
                {itemData.genres.map((item, index) => {
                  return <p key={index}>{item.name}</p>;
                })}
              </Span>
              <Span>
                <SubText>{isMovie ? "Movie" : "TV"}</SubText>
              </Span>
            </OtherInfosSection>
            <p>
              <SubText>Overview:</SubText> {itemData.overview}
            </p>
          </OtherInfosContainer>
          {isMovie ? null : (
            <EpisodesInfoContainer>
              <h1>Episodes</h1>
              <EpisodesSpan>
                <EpisodesTextContainer>
                  <SubText>Number of Episodes: </SubText>
                  <p>{itemData.number_of_episodes}</p>
                </EpisodesTextContainer>
                <EpisodesTextContainer>
                  <SubText>First Air Date</SubText>
                  <p>{formatDate(itemData.first_air_date)}</p>
                </EpisodesTextContainer>
              </EpisodesSpan>
              <EpisodesSpan>
                <EpisodesTextContainer>
                  <SubText>Number of Seasons: </SubText>
                  <p>{itemData.number_of_seasons}</p>
                </EpisodesTextContainer>
                <EpisodesTextContainer>
                  <SubText>Last Air Date</SubText>
                  <p>{formatDate(itemData.last_air_date)}</p>
                </EpisodesTextContainer>
              </EpisodesSpan>
            </EpisodesInfoContainer>
          )}
          <TrailerInfosContainer>
            <h1>Videos</h1>
            <TrailerContainer>
              {videos &&
                videos.map((item, index) => {
                  if (index < 5) {
                    return (
                      <Trailer
                        key={index}
                        className="video"
                        title="Youtube player"
                        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                        src={`https://www.youtube.com/embed/${item.key}?autoplay=0&modestbranding=1`}
                        allowFullScreen={true}
                      />
                    );
                  } else return null;
                })}
            </TrailerContainer>
          </TrailerInfosContainer>
        </Container>
      )}
    </>
  );
};

export default ItemPage;
