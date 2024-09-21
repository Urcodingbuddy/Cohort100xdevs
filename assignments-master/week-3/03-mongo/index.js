const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.use("/",userRouter)
app.use(express.json({ strict: false }));

app.get('/courses', async(req, res) => {
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

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
