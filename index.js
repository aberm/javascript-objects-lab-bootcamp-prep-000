var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  var object2 = Object.assign({}, object)
  object2[key] = value
  return object2
}