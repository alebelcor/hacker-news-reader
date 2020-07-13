import React from 'react';
import PropTypes from 'prop-types';

import styles from './Spinner.module.css';

const Spinner = ({ className }) => {
  return (
    <div role="status" className={`${styles.spinner}${className ? ` ${className}` : ``}`}>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
