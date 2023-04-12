const express = require('express'); 
const app = express();
const cors = require('cors');
const Post = require('./models/postModel');
app.use(express.json());
app.use(cors({
    origin: '*',
    // credentials: true
}));
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://saisrikarreddyk20:srikar@cluster0.6ug4u4w.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to database");
})
.catch(() => {
    console.log("Connection failed");
});

// const post_route = require('./routes/postRoute');
// app.use('/api', post_route);

app.listen(8000, () => {
    console.log("Server started");
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/post", (req, res) => {

    const post = new Post({
        post_id : req.body.post_id,
        Employee_name: req.body.Employee_name,
        Address: req.body.Address,
        Age: req.body.Age,
        Department: req.body.Department,
        Employee_status: req.body.Employee_status
    });
    post.save()
    .then(createdPost => {
        res.send(createdPost);
    })
    .catch(error => {
        res.send(error);
    })
})
    
app.get("/allposts", (req, res) => {
    Post.find()
    .then(posts => {
        res.send(posts);
    })
    .catch(error => {
        res.send(error);
    })
});

app.get("/update/:id", (req, res) => {
    const id = req.params.id;
    Post.findById(id)
    .then(post => { 
        res.send(post);
    })
    .catch(error => {
        res.send(error);
    })
})

app.post("/update/:id", (req, res) => {
    const id = req.params.id;
    Post.findByIdAndUpdate(id, req.body)
    .then(post => { 
        res.send(post);
    })
    .catch(error => {
        res.send(error);
    })
})