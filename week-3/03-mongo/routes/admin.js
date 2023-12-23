const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    
    const username = req.body.username
    const password = req.body.password
    
    const newAdmin = new Admin({
        username : username,
        password : password
    })

    newAdmin.save()
    res.status(200).json({message: "Admin created successfully"})
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const newCourse = new Course({
        id : Math.floor(Math.random() * 100) + 1,
        title : req.body.title,
        description : req.body.description,
        price: req.body.price,
        image: req.body.image
    })

    newCourse.save()
    res.json({message: 'Course created successfully', courseId: newCourse.id})
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then((course) => res.json(course))
});

module.exports = router;