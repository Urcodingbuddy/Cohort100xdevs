const { Router } = require("express");
// const { Admin, User, Course } = require("../db/index")
const adminMiddleware = require("../middleware/admin");
const config = require("../config");
const JWT_SECRET = config.JWT_SECRET;
const router = Router();
const jwt = require("jsonwebtoken");


// Admin Routes

router.post('/signup', async (req, res) => {
    console.log("Admin process started")
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const existAdmin = await Admin.find({ username })
    if (existAdmin) {
        return res.status(200).json({ msg: "Admin username already exists, please try a diffrent one like - (alphanumeral)" })
    } else {
        await Admin.create({
            username,
            password
        });
        res.status(200).json({
            message: "Admin created in successfully"
        })
        console.log("Admin process ended")
    }

});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const isValid = await User.find({
        username,
        password
    })
    if (User) {
        const token = jwt.sign({
            username
        }, JWT_SECRET)
        res.json({
            token
        })
    } else {
        res.status(401).json({
            message: "Invalid credentials"
        })
    }


})

router.post('/courses', adminMiddleware, async (req, res) => {
    try {
      const newCourse = await Course.create({
        title: req.body.title,
        description: req.body.description,
        imageLink: req.body.imageLink,
        price: req.body.price
      });
      res.json(`The ${title} course is created succesfully
        Other Details are :-  `,newCourse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating course' });
    }
  });

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find().exec(); // Retrieve all courses
        res.json(courses); // Return the courses in the response
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving courses' });
      }
});

module.exports = router;