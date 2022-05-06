const express=require('express');
const axios =require('axios');
const fetchBranchService= require('./get');

const port =5000;
const app=express();

const Rest=express.Router();

app.get('/branches/:location',fetchBranchService.fetchBranch);
app.listen(port,console.log('server started on port 5000'));
