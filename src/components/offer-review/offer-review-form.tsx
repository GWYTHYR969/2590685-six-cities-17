import { useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../hooks/use-app';
import { putOfferComment, fetchOfferComments } from '../../store/offer/offer-api-actions';

const MAX_TEXT_LENGTH = 300;
const MIN_TEXT_LENGTH = 50;

type InitialFormDataType = {
  rating: number;
  comment: string;
}

const initialFormState: InitialFormDataType = {
  rating: 0,
  comment: ''
};

type OfferReviewSubmitProps = {
  offerId: string;
}

function OfferReviewForm({ offerId }: OfferReviewSubmitProps): JSX.Element {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const dispatch = useAppDispatch();


  const handleChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      comment: evt.target.value
    }));

    if (formData.comment.length > MIN_TEXT_LENGTH && formData.comment.length < MAX_TEXT_LENGTH) {
      setIsSubmitDisabled(false);
    }
  };

  const handleChangeRating = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      rating: Number(evt.target.value)
    }));
  };

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(putOfferComment({
      offerId,
      text: formData.comment,
      rating: formData.rating
    }))
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          setFormData(initialFormState);
          dispatch(fetchOfferComments(offerId));
        }
      });
    setFormData(initialFormState);
    setIsSubmitDisabled(true);
  };

  const getRadionLabelId = (rating: number): string => `${rating}-star`;

  const StarImage = ({ rating }: { rating: number }) => (
    <>
      <input
        onChange={handleChangeRating}
        checked={formData.rating === rating}
        className="form__rating-input visually-hidden"
        name="rating" value={rating}
        id={getRadionLabelId(rating)}
        type="radio"
      />
      <label htmlFor={getRadionLabelId(rating)} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>

  );


  return (
    <form className="reviews__form form" onSubmit={handleFormSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <StarImage rating={5} />
        <StarImage rating={1} />
        <StarImage rating={2} />
        <StarImage rating={3} />
        <StarImage rating={4} />
      </div>
      <textarea onChange={handleChangeComment} value={formData.comment} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={ isSubmitDisabled }>Submit</button>
      </div>
    </form>
  );
}

export default OfferReviewForm;
