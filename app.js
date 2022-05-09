const express=require('express');
const fetchBranchService= require('./getBranches');

const app=express();
app.use(express.json());

const Rest=express.Router();

app.get('/branches',fetchBranchService.fetchBranch);

module.exports=app;