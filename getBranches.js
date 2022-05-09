const axios=require('axios');
const env=require('dotenv');
const helpers=require('./validation');
const url ='https://api.lloydsbank.com/open-banking/v2.2/branches'



const fetchBranch = async (req,res)=>{

  const validateMessage =helpers.validate(req.headers.location); //validate the location parameters
  //const testResponse=null;
  
    console.log(validateMessage);

    try {
      if(validateMessage === true){
        var branchData=[];
        const response = await axios.get(url);
        testResponse=response;
        const Branches = response.data.data[0].Brand[0].Branch;
        
        console.log(req.headers.location);
  

        Branches.forEach(element => {
          if(req.headers.location===element.PostalAddress.TownName){
            branchData.push(element);
            return;
          }
        }); 
        console.log(branchData);
        res.status(200).json(branchData); 
        console.log(req.headers.location);
     }
     else{
       throw new Error(validateMessage);
     }
    } catch (error) {
       //console.log(error);
       res.status(400).json(validateMessage);
      }
      
    }

module.exports={
    fetchBranch
}
