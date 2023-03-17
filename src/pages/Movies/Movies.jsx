import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from 'components/Container/Container';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { fetchMovieByQuery } from 'services/API';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';
  const location = useLocation();

  const handleFormSubmit = searchQueryForm => {
    setSearchQuery(searchQueryForm !== '' ? { query: searchQueryForm } : {});
  };

  useEffect(() => {
    if (query) {
      try {
        fetchMovieByQuery(query).then(resp => {
          setSearchResults([...resp.results]);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [query]);

  return (
    <Container>
      <SearchBox onSubmit={handleFormSubmit}></SearchBox>
      {searchResults.length === 0 && query !== '' && (
        <p>The search has not given any results</p>
      )}

      {searchResults.length > 0 && (
        <h1>
          Search results for keyword <em>{query}</em>:
        </h1>
      )}
      <ul>
        {searchResults.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Movies;
