const findKeyByValue=function(object,value){
    const arrkeys = Object.keys(object) 
    for(let element of arrkeys){
      if(object[element]===value){
       return element 
      }
    }
  }
       module.exports=findKeyByValue;