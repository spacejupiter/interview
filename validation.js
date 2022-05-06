const validate= (url)=>{
  if(typeof(url) !== string){
      return ('header must be a string value');
  }
  if(url==null){
      return ('header must not be a null value');
  }
  else{
      return {
          status:true,
          message:url
      };
  }
}
module.exports ={validate}