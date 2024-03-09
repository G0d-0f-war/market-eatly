import React from 'react';
import CustomerTitle from './CustomerTitle/CustomerTitle';
import CustomerReview from './CustomerReview/CustomerReview';
import styles from './CustomerEnt.module.scss';
function CustomerEnt(props) {
  return (
    <div className={styles.customer}>
      <CustomerTitle />
      <CustomerReview />
    </div>
  );
}

export default CustomerEnt;
