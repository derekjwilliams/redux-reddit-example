import React, { Component, PropTypes } from 'react';

export default class SearchEntry extends Component {
  render () {
    const { value, onChange } = this.props;
    return (
      <span>
      <input type="text" 
             onChange={e => onChange(e.target.value)}
             value={value} />
      </span>
    );
  }
}

SearchEntry.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
