const authController = require('../controllers/auth');
const courseController = require('../controllers/courseController');
const homeController = require('../controllers/home');
const { hasUser } = require('../middlewares/guards');

module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/course', hasUser(), courseController);
};
