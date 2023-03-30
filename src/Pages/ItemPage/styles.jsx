import { Star } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackdropContainer = styled.div`
  z-index: -2;
  width: 100%;
  position: absolute;
`;

export const Backdrop = styled.img`
  width: 100%;
  height: 50vh;
  image-resolution: 300dpi;
  object-fit: fill;
  image-rendering: optimizeQuality;
  mask-image: linear-gradient(#181d2626, rgba(0, 0, 0, 0));
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 1rem;
  }
`;

export const Title = styled.h2`
  color: #fff;
`;

export const Poster = styled.img`
  max-width: 300px;
`;

export const TrailerInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 2rem;
  width: 95%;
`;

export const TrailerContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Trailer = styled.iframe`
  width: 350px;
  height: 250px;
  border: none;
`;

export const OtherInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding: 1rem 5rem;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const OtherInfosSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  color: #f8f32b;
`;

export const RatingText = styled.p``;

export const RatingIcon = styled(Star)``;

export const SubText = styled.p`
  color: #a2bfee;
`;

export const Span = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const EpisodesInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 2rem;
  width: 95%;
  gap: 1rem;
`;

export const EpisodesSpan = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 1rem;
}
`;

export const EpisodesTextContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`;
