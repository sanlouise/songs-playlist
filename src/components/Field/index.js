// Dependencies
import React, { PropTypes } from 'react';

// Stateless component / Functional component
const Field = ({
  label,
  onChange,
  textarea,
  value,
}) => (
  <div>
    <label>{label}</label>
    <input
      onChange={onChange}
      type={textarea ? 'textarea' : 'text'}
      value={value}
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
