const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [4, 'Title should be atleast 4 charakters long!'],
  },
  description: {
    type: String,
    required: true,
    minlength: [20, 'Description should be atleast 4 charakters long!'],
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: 'Invalid image URL',
    },
  },
  duration: { type: String, required: true },
  createdAt: {
    type: String,
    required: true,
    default: () => new Date().toISOString().slice(0, 10),
  },
  users: { type: [Types.ObjectId], ref: ' User', default: [] },
  userCount: {type: Number, default: 0},
  owner: { type: Types.ObjectId, ref: 'user' },
  
});

courseSchema.index(
  { title: 1 },
  {
    collation: {
      locale: 'en',
      strength: 2,
    },
  }
);
const Course = model('Course', courseSchema);

module.exports = Course;
