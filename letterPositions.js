const letterPositions=function(sentence){
  const results = {};
for(let i=0;i<sentence.length;i++){
  sentence=sentence.toLowerCase()
  if(results[sentence[i]]===undefined){
    results[sentence[i]]=[i]
  }
  else{
    results[sentence[i]].push(i)
  }
}
  return results;
}


   module.exports=letterPositions;