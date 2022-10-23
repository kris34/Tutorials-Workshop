const { getAllbyDate, getRecent } = require('../services/courseService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
  let view;
  let courses = [];

  if (req.user) {
    view = 'user-home';
    courses = await getAllbyDate();
  } else {
    view = 'guest-home';
    courses = await getRecent();
  }

  res.render(view, {
    title: 'Home page',
    courses,
  });
});

module.exports = homeController;
