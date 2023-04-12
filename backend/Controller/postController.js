const Post = require('../models/postModel');
const { response } = require('../routes/postRoute');

const creatPost = async (req, res) => {
try {
    // const post = new Post(req.body);
    // await post.save();
    // response.status(201).send(post);
    const post = new Post({
        Employee_name: req.body.Employee_name,
        Address: req.body.Address,
        Age: req.body.Age,
        Department: req.body.Department,
        Employee_status: req.body.Employee_status

    });
    const postData = await post.save();
    res.status(200).send({ success: true, data: postData })
} catch (error) {
    response.status(400).send({ succcess: false, error: error.message});
}
}

module.exports = {
    creatPost
}