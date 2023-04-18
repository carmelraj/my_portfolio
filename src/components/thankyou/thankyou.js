import React from 'react';
import PropTypes from 'prop-types';
import './thankyou.scss';

const Thankyou = () => {
  const firstName = sessionStorage.getItem('firstName');
  const lastName = sessionStorage.getItem('lastName');
  return(
  <div className="thankyou d-flex d-flex-column section align-items-center dark-ng">
      <h4>Hello, {firstName} {lastName}</h4>
      <img src="./images/success.png" alt="Thank you for contacting me" />
      <h2 className="center-align pad0">Thank you for contacting me</h2>
  </div>
)};

Thankyou.propTypes = {};

Thankyou.defaultProps = {};

export default Thankyou;
