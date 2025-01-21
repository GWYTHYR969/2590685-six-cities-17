import { useState } from 'react';
import { Review } from '../../types';
import { reviews as defaultReviews } from '../../mocks/reviews';
import { ratingToPercent } from '../../utils';
import { LoginStatus } from '../../const';
import FeedbackForm from '../feedback-form/feedback-form';


type OfferReviewsProps = {
  authorizationStatus: LoginStatus;
}

function OfferReviews(props: OfferReviewsProps): JSX.Element {
  const [reviews, setReviews] = useState(defaultReviews);

  const addReview = (newReview: Review) => {
    newReview.id = reviews.length;
    setReviews([...reviews, newReview]);
  };

  const reviewTimeFormat = (date: Date): string => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review: Review) => (
          <li className="reviews__item" key={review.id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                Max
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${ratingToPercent(review.rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{review.text}</p>
              <time className="reviews__time" dateTime={reviewTimeFormat(review.date)}>{review.date.toLocaleDateString()}</time>
            </div>
          </li>

        ))}
      </ul>
      {props.authorizationStatus === LoginStatus.Auth ? (
        <FeedbackForm addReviewCallback={addReview} />
      ) : ''}
    </section>
  );
}

export default OfferReviews;
