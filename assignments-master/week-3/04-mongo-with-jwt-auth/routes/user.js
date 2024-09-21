const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const config = require("../config");
const JWT_SECRET = config.JWT_SECRET;
const { User, Course } = require("../db/index")
const jwt = require('jsonwebtoken')


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    try {
        const existUser = await User.findOne({
            username
        })
        if (existUser) {
            return res.status(400).send({
                msg: "User already exist, try alphaNumeral"
            })
        }
        else {
            User.create({
                username,
                password,
            })
            res.status(200).send({
                msg: "User registered successfully"
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong"
        })
    }


});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = User.findOne({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        return res.status(200).send({
            token
        })
    } else {
        return res.status(401).send({
            msg: "Invalid username or password"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const courses = await Course.find({});
        res.send(courses);
    } catch (e) {
        res.status(500).json({
            msg: "Courses not Found"
        })
    }

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const username = req.username;
    // Implement course purchase logic
    try {
        const courseId = req.params.courseId;
        const user = await User.findOne({ username })
        if (user.purchasedCourses.includes(courseId)) {
            return res.status(400).send({
                msg: "You have already purchased this course"
            })

        } else {
            User.updateOne({ username }, {
                $push: {
                    purchasedCourses: courseId
                }
                
            })
            res.status(200).json({
                msg: "Course purchased successfully"
            })
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router