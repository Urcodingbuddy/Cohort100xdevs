const mongoose = require('mongoose');

// Define connection options
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Connect to MongoDB
mongoose.connect('mongodb+srv://anshpethe110:%40mangoanshpethe159@cluster0.702twr0.mongodb.net/100xdevs-Practice?retryWrites=true&w=majority', connectionOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Define schemas
const adminSchema = new mongoose.Schema({
  username: String,
  password: String
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number
});

// Create models
const Admin = mongoose.model('Admin', adminSchema);
const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);

// Export models
module.exports = {
  Admin,
  User,
  Course
};