import { Comment } from '../../types';
import { ratingToPercent } from '../../utils';


type OfferReviewProps = {
  comment: Comment;
}

function OfferReview({ comment }: OfferReviewProps): JSX.Element {
  const commentTimeFormat = (date: Date): string => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const commentDate = new Date(comment.date);


  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ratingToPercent(comment.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime={commentTimeFormat(commentDate)}>{commentDate.toLocaleDateString()}</time>
      </div>
    </li>
  );
}

export default OfferReview;
