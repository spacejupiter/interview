
const validate= (location)=>{
    try {
        if((!typeof location === String)){
            return ('location must be a string value');
        }
        if ((typeof location == null || location == '' || location == undefined)){
            return ('location must not be empty or null');
           
        }
        else{
            return true;
        }
    } catch (error) {
        return(error);
    } 
 }
 
 
 module.exports ={validate}
 