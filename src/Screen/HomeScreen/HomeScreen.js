import {
  FlexColumn,
  InnerSection,
  SpinnerContainer,
} from "../../Global.Styles";
import {
  CardsContainer,
  Description,
  HeroSection,
  InnerHeroSection,
  LoadMore,
  MoviesTitle,
  Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";
import { useState, useEffect, useCallback } from "react";
// import { useCallback } from "react/cjs/react.production.min";
import CRUDRequests from "../../API/Index";

function HomeScreen(props) {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const fetchData = useCallback(async () => {
    const response = await CRUDRequests.get(
      `/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187&page=${pageNumber}`
    );
    setMoviesList((prevState) => [...prevState, ...response.data.results]);

    setIsLoading(false);
  }, [pageNumber]);

  const handleLoadMore = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData, pageNumber]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn>
      <HeroSection
        img={"http://image.tmdb.org/t/p/w500" + moviesList[0].backdrop_path}
      >
        <InnerHeroSection>
          <Title>{moviesList[0].title}</Title>
          <Description>{moviesList[0].overview}</Description>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Popular Movies</MoviesTitle>
        <CardsContainer>
          {moviesList.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.title}
              img={"http://image.tmdb.org/t/p/w500" + item.poster_path}
            />
          ))}
        </CardsContainer>
        <LoadMore isLoading={isLoading} onClick={handleLoadMore}>
          Load more...
        </LoadMore>
      </InnerSection>
    </FlexColumn>
  );
}

export default HomeScreen;
