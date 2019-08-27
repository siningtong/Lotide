const takeUntil = function (array, callback) {
  let newArray = [];
  array.forEach(function (element, index) {
    if (callback(element)) {
      return newArray = array.slice(0, index)

    }
  })
  return newArray

}
module.exports=takeUntil;