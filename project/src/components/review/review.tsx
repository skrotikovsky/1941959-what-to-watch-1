import {Review} from '../../types/review';
import moment from 'moment';
type ReviewProp = {
  review: Review;
}
export default function ReviewComponent({review}:ReviewProp): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={moment(review.date).format('LL')}>{moment(review.date).format('MMMM D, YYYY')}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{review.rating}</div>
    </div>
  );
}
