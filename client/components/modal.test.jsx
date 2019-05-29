import React from 'react';
import { shallow, mount } from 'enzyme';
import moment from 'moment';
import ReviewApp from './reviewApp.jsx';
import ReviewModal from './reviewModal.jsx';
import MoreReviews from './reviewApp.jsx';
import ReviewsModalBody from './reviewsModalBody.jsx';

describe('Modal', () => {

  it('modal renders on load', () => {
    const wrapper = shallow(<ReviewApp listing_id={2} />);

    expect(wrapper.find('#modal').length).toEqual(1);
  });

  it('displays modal when "isModalShowing" is true', () => {
    const modal = shallow(<ReviewModal isModalShowing={true} />)

    expect(modal.exists()).toEqual(true);
  });

  it('renders text of modal when modal is open', () => {
    const wrapper = mount(<ReviewApp listing_id={2} />);
    const reviewsModalBody = shallow(<ReviewsModalBody reviews={[{ 'text': 'someting' }]} formatDate={(date) => String(moment(new Date(date)).fromNow())}></ReviewsModalBody>);
    wrapper.find(MoreReviews).simulate('click');

    expect(reviewsModalBody.find('#modalText').text()).toEqual('someting');
  });
});