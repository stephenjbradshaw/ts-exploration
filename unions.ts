// Union creates a complex type by composing simple ones
// Value passed to parameter x could be a string, or an array of strings
// The function would error out if it wasn't passed an iterable, but the type definitions stop you from passing an incorrect value accidentally!
function getLength(x: string | string[]) {
  return x.length;
}

getLength("asdf") 
getLength(["a", "b", "c", "d"])
getLength([1, 2, 3, 4]) // Invalid
getLength({"a": 1}) // Invalid

function wrapInArray(x: string | string[]) {
  if (typeof x === "string") {
    return [x]
  } else {
    return x;
  }
}

// Can set literal value for type
type WindowStates = "open" | "closed" | "minimized"
let WindowState: WindowStates = "open" // valid
WindowState = "closed" // valid
WindowState = "foo" // invalid