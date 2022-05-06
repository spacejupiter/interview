const axios=require('axios');
const env=require('dotenv');
const helpers=require('./validation');
const url ='https://api.lloydsbank.com/open-banking/v2.2/branches'



const fetchBranch = async (req,res)=>{

    const validated =helpers.validate(req.params.location);
    const option={
        headers:{
          "lbg-txn-branch-location":req.params.location
        }
      }

   console.log('started');
   try {

     if(validated){
      const data= await axios.get(url,option);
      console.log(data.data || "no data returned");
      res.send(data.data);
     }
   } catch (error) {
       console.log(error);
   }
}

module.exports={
    fetchBranch
}