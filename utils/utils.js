function convertToCastString(casts){
  var constsjoin = "";
  for (var idx in casts){
    castsjoin = castsjoin + casts[idx].name + " / ";
  }
  return constsjoin.substring(0,castsjoin.length -2);
}

function convertToCastInfos(casts){
  var  castsArray = []
  for (var idx in casts){
    var cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : "",
      name: casts[idx].name
    }
    castsArray.push(cast);
  }
  return castsArray
}
export {
  convertToCastString,
  convertToCastInfos,
}