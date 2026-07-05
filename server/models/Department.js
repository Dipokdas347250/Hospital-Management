const mongoose = require('mongoose');
const slugify = require('slugify');

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    slug: {
      type: String,
      unique: true,
      trim: true
    },
    description: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

departmentSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true, strict: true });
  next();
});

module.exports = mongoose.model('Department', departmentSchema);
