const Course = require('../models/Course');
const User = require('../models/User');

async function getAllbyDate() {
  return Course.find({}).sort({ createdAt: 1 }).lean();
}
async function createCourse(course) {
  return Course.create(course);
}

async function getRecent() {
  return await Course.find({}).sort({ userCount: -1 }).limit(3).lean();
}

async function getById(id) {
  return Course.findById(id).lean();
}
module.exports = {
  getAllbyDate,
  createCourse,
  getRecent,
  getById
};
