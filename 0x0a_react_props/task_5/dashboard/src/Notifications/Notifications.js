import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

export const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <div className='notifications-wrapper'>
      <div className='menuItem'>Your Notifications</div>
      {displayDrawer && (
        <div className='Notifications'>
          {listNotifications.length ? (
            <Fragment>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map(({ id, type, value, html }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    value={value}
                    html={html}
                  />
                ))}
              </ul>
            </Fragment>
          ) : (
            <p>No new notifications for now</p>
          )}
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
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
