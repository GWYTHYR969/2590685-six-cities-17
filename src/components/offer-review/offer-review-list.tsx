import { useEffect } from 'react';
import { Comment } from '../../types';
import { useAppSelector, useAppDispatch } from '../../hooks/use-app';
import { getLoginStatus } from '../../store/user/user-selectors';
import { fetchOfferComments } from '../../store/offer/offer-api-actions';
import { getComments } from '../../store/offer/offer-selectors';
import { LoginStatus } from '../../const';
import OfferReviewForm from './offer-review-form';
import OfferReview from '../offer-review/offer-review';

type OfferReviewsListProps = {
  offerId: string;
}

function OfferReviewsList({ offerId }: OfferReviewsListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(getLoginStatus);

  useEffect(() => {
    dispatch(fetchOfferComments(offerId));
  }, [dispatch, offerId]);

  const commentsList: Comment[] = useAppSelector(getComments);


  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsList.length}</span></h2>
      <ul className="reviews__list">
        {commentsList.map((comment: Comment) => (
          <OfferReview comment={comment} key={comment.id}/>
        ))}
      </ul>
      {loginStatus === LoginStatus.Auth && <OfferReviewForm offerId={offerId}/>}
    </section>
  );
}

export default OfferReviewsList;
