import { useState, useEffect } from 'react';

import { Container } from 'components/Container/Container';
import { fetchTrendingMovie } from 'services/API';
import { Link, useLocation } from 'react-router-dom';

const TrandingMovies = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const location = useLocation;
  useEffect(() => {
    try {
      fetchTrendingMovie().then(resp => setTrandingMovies([...resp.results]));
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <main>
      <Container>
        <h1>Tranding today</h1>
        <ul>
          {trandingMovies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </main>
  );
};

export default TrandingMovies;
