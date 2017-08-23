// Dependencies
import React, { PropTypes } from 'react';
import styles from './styles.css';

// Stateless component / Functional component
const Field = ({
  label,
  onChange,
  textarea,
  value,
}) => (
  <div>
    <input
      onChange={onChange}
      type={textarea ? 'textarea' : 'text'}
      value={value}
      placeholder={label}
    />
  </div>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textarea: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

Field.defaultProps = {
  textarea: false,
};

export default Field;
