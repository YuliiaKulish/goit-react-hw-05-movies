import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';

import Notification from '../Notification/Notification';

import { ReviewsList, ReviewAuthor } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewLoad, setreviewLoad] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  const fetchData = async id => {
    try {
      const response = await API.getReview(id);
      setReviews(response);
      setreviewLoad(true);
    } catch {
      const message = 'Oops, something went wrong ...';
      setError(message);
    }
  };

  if (reviews.length === 0 && reviewLoad) {
    const message = 'We dont have any review for this movie';
    return <Notification message={message} />;
  }

  return (
    <>
      {error ? (
        <Notification message={error} />
      ) : (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <ReviewAuthor>Author: {author}</ReviewAuthor>
                <p>{content}</p>
              </li>
            );
          })}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
