// Code your solution in this file
function findMatching(drivers, name) {
  x = drivers.filter(function (driver_name) { if (driver_name.toUpperCase() == name.toUpperCase()) {return driver_name}; });
  return x
}

function fuzzyMatch(drivers, string) {
  // return driver_name[0, string.length]
  length = string.length;
  x = 3
  x = drivers.filter(function (driver_name) { if (x < 4) { x = x + 1; return driver_name[0]}; });
  return x
}

function matchName(drivers, name) {
  x = drivers.filter(function (driver) { if (driver.name == name) {return driver}; });
  return x
}
// function fuzzyMatch
// fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
