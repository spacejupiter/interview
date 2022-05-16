const axios=require('axios');
//const env=require('dotenv');
const helpers=require('../helpers/validation');
const url ='https://api.lloydsbank.com/open-banking/v2.2/branches'



const fetchBranchData = async ()=>{

  let response;

    try {
        response = await axios.get(url);
        return(response);
    } catch (error) {
       console.log(error)
      }
      console.log(response);
      
     }


module.exports={
    fetchBranchData
}
