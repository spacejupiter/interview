const express=require('express');
const fetchBranchService= require('./api/getBranches');

const Rest=express();
Rest.use(express.json());

//const Rest=express.Router();

Rest.get('/branches',fetchBranchService.fetchBranch);

module.exports=Rest;