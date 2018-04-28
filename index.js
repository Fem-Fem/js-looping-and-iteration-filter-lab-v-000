// Code your solution in this file
function findMatching(drivers, name) {
  // return name
  drivers.filter(function (driver_name) { return driver_name == name; });
}

// function fuzzyMatch
// fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
