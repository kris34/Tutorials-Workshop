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

async function deleteById(id) {
  return Course.findByIdAndDelete(id);
}

async function updateById(id, data) {
  let existing = await Course.findById(id);
  existing.title = data.title;
  existing.description = data.description;
  existing.imageUrl = data.imageUrl;
  existing.duration = data.duration;

  return existing.save();
}

async function enrollUser(courseId, userId) {
  const existing = await Course.findById(courseId);
  existing.users.push(userId);
  existing.userCount++;
  return existing.save();
}

module.exports = {
  getAllbyDate,
  createCourse,
  getRecent,
  getById,
  deleteById,
  updateById,
  enrollUser
};
