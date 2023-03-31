import { Star } from "phosphor-react";
import React from "react";
import {
  ItemContainerLink,
  ItemCover,
  ItemRatingContainer,
  ItemRatingText,
  ItemTitle,
} from "./styles";

export const Poster = ({ item, similar }) => {
  return (
    <>
      {item ? (
        <ItemContainerLink
          href={
            item.media_type === "movie" ? `/movie/${item.id}` : `/tv/${item.id}`
          }
          similar={similar}
        >
          <ItemRatingContainer similar={similar}>
            <Star weight="fill" />
            <ItemRatingText>{item.vote_average.toFixed(1)}</ItemRatingText>
          </ItemRatingContainer>
          <ItemCover
            src={`https://image.tmdb.org/t/p/${similar ? "w200" : "w500"}/${
              item.poster_path
            }`}
            similar={similar}
            onError={ event => event.target.style.display = 'none' }
          />
          <ItemTitle similar={similar}>
            {item.media_type === "movie" ? item.title : item.name}
          </ItemTitle>
        </ItemContainerLink>
      ) : (
        <></>
      )}
    </>
  );
};
