import React from 'react';
import CustomerTitle from './CustomerTitle/CustomerTitle';
import CustomerReview from './CustomerReview/CustomerReview';
import styles from './CustomerEnt.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CustomerEnt(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.customer}>
      <div className={styles.items}>
        <CustomerTitle />
        <Slider {...settings}>
          <div>
            <CustomerReview />
          </div>
          <div>
            <CustomerReview />
          </div>
          <div>
            <CustomerReview />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CustomerEnt;
