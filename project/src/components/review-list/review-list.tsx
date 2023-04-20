import {Reviews} from '../../types/review';
import ReviewComponent from '../review/review';

type ReviewsProp = {
  reviews: Reviews;
}
export default function ReviewList({reviews}: ReviewsProp):JSX.Element {
  return (
    <>
      {reviews.map((x):JSX.Element=>(
        <ReviewComponent review={x} key={`${x.id}${x.user.name}`}/>)
      )}
    </>
  );
}
