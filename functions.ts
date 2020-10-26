interface User {
  name: string,
  id: number,
}

// Define expected argument primitive types
const addArgs = (x: number, y: number): number => {
  return x + y;
}

// Value returned must match type User. Below example fails.
function getAdminUser(): User {
  return {name: "stephen", id: "foo"}
}

// Argument to this function must match type User
const deleteUser = (user: User) => {
 // ...
}

deleteUser("foo") // Fails
deleteUser({name: "Stephen", id: "1"}) // Works