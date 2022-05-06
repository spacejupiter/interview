

const validate= (url)=>{
    if((!typeof url === String)){ 
        throw error;
    }
    if ((typeof url == null)){
        throw error;
    }
    else{
        return true;
    }
}


module.exports ={validate}