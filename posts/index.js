const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');
const app = express();
const axios = require('axios');


app.use(bodyParser.json());
app.use(cors());

var posts = {};

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/posts/create', async (req,res)=>{

    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
                    id,
                    title 
                }
        
    // in order to work inside k8s cluster, we need to change the url to 
    // clusterIP name (changed from localhost) of the containder pod.
    await axios.post('http://event-bus-srv:4005/events',{
        type:'PostCreated',
        data: {
            id, title
        }
    })
    
    res.status(201).send(posts[id]);

});

app.post('/events',(req,res)=>{
    console.log("Received Event", req.body.type);
    res.send({});
})

app.listen(4000, ()=>{
    // Adding a new version to the deployment
    console.log("Added latest as version in pod definition:v538")
    console.log("Listening to 4000")
});