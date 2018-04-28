// Code your solution in this file
function findMatching(drivers, name) {
  // return name
  x = drivers.filter(function (driver_name) { if (driver_name.toUpperCase() == name.toUpperCase()) {return true}; });
  return x
}

// function fuzzyMatch
// fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
