import { useState } from 'react';
import { Review } from '../../types';
import { reviews as defaultRevies } from '../../mocks/reviews';
import { LoginStatus } from '../../const';
import OfferReviewForm from './offer-review-form';
import OfferReview from '../offer-review/offer-review';

type OfferReviewsListProps = {
  authorizationStatus: LoginStatus;
}

function OfferReviewsList(props: OfferReviewsListProps): JSX.Element {
  const [reviews, setReviews] = useState(defaultRevies);

  const addReview = (newReview: Review) => {
    newReview.id = reviews.length;
    setReviews([...reviews, newReview]);
  };


  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review: Review) => (
          <OfferReview review={review} key={review.id}/>
        ))}
      </ul>
      {props.authorizationStatus === LoginStatus.Auth ? (
        <OfferReviewForm addReviewCallback={addReview} />
      ) : ''}
    </section>
  );
}

export default OfferReviewsList;
