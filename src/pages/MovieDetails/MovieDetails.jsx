import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { BackLink } from 'components/BackLink/BackLink';
import { isEmpty } from 'lodash';
import { Container } from 'components/Container/Container';
import {
  MovieInfoWrapper,
  MovieTextWrapper,
  SubMenuItem,
  SubMenuList,
  SubNavLink,
} from './MovieDetails.styled';
import { fetchMovieDetails } from 'services/API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
  const backHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      fetchMovieDetails(movieId).then(resp => {
        setMovieInfo(resp);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  let source = '';
  if (!movieInfo.poster_path) {
    source =
      'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  } else {
    source = `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`;
  }

  return (
    <>
      <Container>
        <BackLink to={backHref.current}>go back</BackLink>
        {!isEmpty(movieInfo) && (
          <>
            <MovieInfoWrapper>
              <img src={source} alt={movieInfo.title} width="300px" />
              <MovieTextWrapper>
                {' '}
                <h1>
                  {movieInfo.title}{' '}
                  {movieInfo.release_date && (
                    <span
                      style={{
                        padding: '0px 10px',
                        color: '#a01d1d',
                      }}
                    >
                      {movieInfo.release_date.slice(0, 4)}
                    </span>
                  )}
                </h1>
                <p>
                  User score: {Math.round(movieInfo.vote_average * 10) + '%'}
                </p>
                <strong>Overwiew</strong>
                <p>{movieInfo.overview}</p>
                <strong>Genres</strong>
                <p>
                  {movieInfo.genres.length > 0
                    ? movieInfo.genres.map(genre => genre.name).join(', ')
                    : 'No information'}
                </p>
              </MovieTextWrapper>
            </MovieInfoWrapper>

            <div>
              <h2>Additional information</h2>
              <SubMenuList>
                <SubMenuItem>
                  <SubNavLink to="cast">Cast</SubNavLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SubNavLink to="reviews">Reviews</SubNavLink>
                </SubMenuItem>
              </SubMenuList>

              <Suspense fallback={<div>Loading ...</div>}>
                <Outlet />
              </Suspense>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default MovieDetails;
