// Code your solution in this file
function findMatching(drivers, name) {
  x = drivers.filter(function (driver_name) { if (driver_name.toUpperCase() == name.toUpperCase()) {return driver_name}; });
  return x
}

function fuzzyMatch(drivers, string) {
  length = string.length;
  // return string
  x = drivers.filter(function (driver_name) { if (driver_name[0, length] == string) {return driver_name}; });
  return x
}

function matchName(drivers, name) {
  x = drivers.filter(function (driver) { if (driver.name == name) {return driver}; });
  return x
}
// function fuzzyMatch
// fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
