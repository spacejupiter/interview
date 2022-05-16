const axios=require('axios');
//const env=require('dotenv');
const helpers=require('../helpers/validation');
const url ='https://api.lloydsbank.com/open-banking/v2.2/branches'
const branchesData=require('./fetchBranch');



const fetchBranch = async (req,res)=>{

  let branchData=[],response,Branches;

  const validateMessage =helpers.validate(req.headers.location); //validate the location parameters
  

    try {
      
      if(validateMessage === true){
        response = await branchesData.fetchBranchData();
        Branches = response.data.data[0].Brand[0].Branch;
        console.log(Branches);
        Branches.forEach(element => {
          if(req.headers.location===element.PostalAddress.TownName){
            branchData.push(element);
            return;
          }
        }); 
        res.status(200).json(branchData); 
     }
     else{
       throw new Error(validateMessage);
     }

    } catch (error) {
       console.log(error);
       res.status(400).json(validateMessage);
      }
      
    }

module.exports={
    fetchBranch
}
