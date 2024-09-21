const { Router } = require("express");
const { Admin, Course } = require("../db");
const User  = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// User Routes      

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    // check if a user with this username already exists
    await Admin.create({
        username: username,
        password: password,
    })
    .then(function(){
        res.json({
            message: 'Admin created successfully'
        });
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;   
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    // Create a new course
  const newCourse =  await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse)
    res.json({
        masg:"Course Created Succesfully", courseI: newCourse._id
    })
});

router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find({}).exec();
        if (courses) {
          res.json({ courses });
        } else {
          res.status(404).json({ message: "No courses found" });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
      }
});


module.exports = router;