const tail = function(num) {
  if(num === undefined){
    return undefined;
  }
  else if(num.length === 0 || num=== 1){
    return [];
  }
  return num.slice(1);
};

module.exports = tail;