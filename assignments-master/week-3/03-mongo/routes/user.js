const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username  = req.body.username;
    const password  = req.body.password;
    const exist = await User.findOne({
        username,
        password
    })
    if(exist) return res.status(409).json({msg: "User already exists"})

    User.create({
        username,
        password
    })
    res.json({
        msg:"User Created Successfully"
    })
});

/*
router.get('/courses', async(req, res) => {
    console.log("user courses")
    // Implement listing all courses logic
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

})
*/


router.post('/courses/:Id', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseid = req.params.Id;
    const username  = req.headers.username;
    await User.updateOne({
        username
    },
    {
        purchasedCourses: {
            "$push": courseid
        }
    })
    res.status(201).json({
        msg: "Course Purchased Successfully"
    })

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    })
    console.log(user.purchasedCourses);
    const  course = await Course.find({
        _id:{
            "$in": user.purchasedCourses.map(id => id.toString())
        }
    });
    res.json({
        courses: course
    })
});

router.get('/', (req, res)=>{
    res.json({
        message: "welcome to Page, please try /signup, /courses/:Id etc"
    })
})

module.exports = router