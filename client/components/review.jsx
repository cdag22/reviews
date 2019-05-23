import React from 'react';
import styled from 'styled-components';


const ReviewBox = styled.div`
  padding: 14px 18px 0 0;
  line-height: 1.43;
`;

const ViewBox = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-bottom: 0.65rem;
`;

const ImageBox = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  margin-right: 1rem;
  display: block;
  `;

const CustomImage = styled.img`
  max-height: 48px;
  width: auto;
  display: block;
  vertical-align: middle;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
`;

const ReviewName = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375rem;
  margin: 0;
`;

const ReviewDate = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.2857142857142858rem;
  margin: 0;
`;

const ReviewText = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.375rem;
  word-wrap: break-word;
  padding: 0 2rem 0 0;
`;


const Review = ({ review, formatDate }) => {
  return (
    <ReviewBox>
      <ReviewBox>
        <ViewBox>
          <ImageBox>
            <CustomImage className="reviewPhoto" src={review.photo} alt=""></CustomImage>
          </ImageBox>
        </ViewBox>
        <ViewBox>
          <ReviewName className="reviewUser">{review.user}</ReviewName>
          <ReviewDate className="reviewDate">{formatDate(review.date)}</ReviewDate>
        </ViewBox>
      </ReviewBox>
      <ReviewText className="reviewText">{review.text}</ReviewText>
    </ReviewBox>
  );
}

export default Review;