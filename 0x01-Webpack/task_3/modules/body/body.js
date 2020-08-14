import $ from 'jquery';
import _ from 'lodash';

import './body.css';

$('body').append(
  '<p>Dashboard data for the students</p>',
  '<button>Click here to get started</button>',
  '<p id="count"></p>'
);

const counter = () => {
  let count = 0;

  return () => {
    return (count += 1);
  };
};

const updateCounter = counter();

const buttonOnClick = () => {
  const count = updateCounter();
  $('#count').text(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(buttonOnClick));
