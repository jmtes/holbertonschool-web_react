import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

import NotificationItem from './NotificationItem';

export const Notifications = ({ displayDrawer }) => {
  return (
    <div className='notifications-wrapper'>
      <div className='menuItem'>Your Notifications</div>
      {displayDrawer && (
        <div className='Notifications'>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem
              type='urgent'
              html={{ __html: getLatestNotification() }}
            />
          </ul>
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              border: 'none',
              backgroundColor: 'transparent'
            }}
            aria-label='Close'
            onClick={() => console.log('Close button has been clicked')}
          >
            <img
              src={closeIcon}
              alt='Close'
              style={{ height: '20px', width: '20px' }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false
};

export default Notifications;
