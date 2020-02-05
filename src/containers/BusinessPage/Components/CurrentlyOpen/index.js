import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  business: PropTypes.object,
};

const defaultProps = {
  business: {
    businessHours: '',
    isAvailableByAppointment: false,
  },
};

export default class CurrentlyOpen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
            <h4 className="open-title">פתוח עכשיו</h4>
            <h4 className="open-hours">9am-10pm</h4>
          </div>
    );
  }
}

CurrentlyOpen.propTypes = propTypes;
CurrentlyOpen.defaultProps = defaultProps;
