// Generics provide variables to types. i.e. programmatic definition of types?
type StringArray = Array<string>;
type ObjectWithNameArray = Array<{ name: string }>


interface Backpack<Type> {  // Define an interface for an object, called Backpack, using a generic called Type.
  add: (x: Type) => void; // The "add" method's x parameter takes an argument of <Type>, returning nothing (void)
  get: () => Type;          // The "get" method returns <Type>
}

declare const myBackpack: Backpack<string> 

/*
Now we have a variable called myBackpack of type Backpack
Because we've told TS that the generic should be a string (terminology?)...
    the add method's x parameter is expecting a string
    the get method should return a string
Advantage: increased polymorphism - no need to create multiple type definitions for different use cases. 
Literally makes the type definition more 'generic'
*/ 

const item = myBackpack.get() // A string, because we declared it as such
myBackpack.add(42) // Can't add 42 because it's wrong type


// This could also have been achieved with unions, but will only cater for the types you give it:

interface BackpackUnion {
  add: (x: string | number) => void,
  get: () => string | number
}