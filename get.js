const axios=require('axios');
const env=require('dotenv');
const validate=require('./validation');
const url ='https://api.lloydsbank.com/open-banking/v2.2/branches'



const fetchBranch = async (req,res)=>{

    const location=validate.validate(req.params.location);
    console.log(location);
    const option={
        headers:{
          "lbg-txn-branch-location":"London"
        }
      }

   console.log('started');
   try {
    const data= await axios.get(url,option);
    console.log(data.data || "no data returned");
    res.send(data.data);
   } catch (error) {
       console.log(error);
   }
}

module.exports={
    fetchBranch
}