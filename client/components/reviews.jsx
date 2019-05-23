import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';

const MoreReviews = styled.a`
  font-size: 16px;
  font-weight: 500;
  -webkit-writing-mode: horizontal-tb;
  writing-mode: horizontal-tb;
  cursor: pointer;
`;

const ReviewColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  min-height: 10rem;
  max-height: 40rem;
  padding-bottom: 1.75rem;
`;

const Reviews = ({ reviews, toggleModal, formatDate }) => {
  let groups = [reviews.slice(0, 2), reviews.slice(2, 4), reviews.slice(4, 6)];
  return (
    <div>
      {groups.map((group, k) =>
        <div className="row" key={k}>
          {group.map((review, i) => (
            <ReviewColumn key={i + k} className="col-6">
              <Review review={review} formatDate={formatDate} />
            </ReviewColumn>
          ))}
        </div>
      )}
      <div className="mt-2">
        <MoreReviews
          id="moreReviews"
          style={{ 'color': '#914669' }}
          onClick={() => toggleModal()}
        >
          Read all {reviews.length} reviews
          </MoreReviews>
      </div>
    </div>
  );
}

export default Reviews;