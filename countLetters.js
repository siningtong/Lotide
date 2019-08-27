
  const countLetters=function(sentence){
    let noSpaces=sentence.split(' ').join('')
    let result={};
    for(let letter of noSpaces){
      letter=letter.toLowerCase()
      if(result[letter] === undefined){
        result[letter]=1
      }
      else{
        result[letter]+=1
      }
    }
    return result
  }
  module.exports=countLetters;
  