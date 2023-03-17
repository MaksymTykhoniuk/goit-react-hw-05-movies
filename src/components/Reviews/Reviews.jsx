import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'services/API';
import { isEmpty } from 'lodash';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    try {
      fetchMovieReviews(movieId).then(resp => setMovieReviews(resp.results));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {isEmpty(movieReviews) ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {movieReviews.map(review => {
            return (
              <li key={review.id}>
                <b>{review.author}</b>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
