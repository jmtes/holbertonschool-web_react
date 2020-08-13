import $ from 'jquery';
import _ from 'lodash';

import '../css/main.css';

$('body').append(
  '<div id="logo"></div>',
  '<p>Holberton Dashboard</p>',
  '<p>Dashboard data for the students</p>',
  '<button>Click here to get started</button>',
  '<p id="count"></p>',
  '<p>Copyright - Holberton School</p>'
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
