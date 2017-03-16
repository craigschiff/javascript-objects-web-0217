var playlist = new Object

function updatePlayslist(obj, key, value){
  obj[key] = value
  return obj
}

function removeFromPlaylist(obj, key){
  delete obj.key
  return obj
}
