const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    })

    newUser.save()
    res.status(200).json({ message: 'User created successfully' })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((course) => res.status(200).json(course))
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const id = req.params.courseId

    Course.find({id: id}).then(async (course) => {
        const updateUser = await User.findOneAndUpdate(
            {username : req.headers.username, password : req.headers.password},
            {
                purchasedCourses : {
                id : id,
                title : course.title,
                description : course.description,
                price: course.price,
                imageLink : course.imageLink
                },
            },
            {
                new: true,
            }
        )
    })

    res.status(200).send(updateUser)
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    User.findOne({username : req.headers.username, password : req.headers.password})
        .then((user) => res.status(200).json(user.purchasedCourses))

});

module.exports = router;