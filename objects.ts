interface User {
  name: string,
  id: number,
}

const user: User = {
  name: "Hayes",
  id: 0,
};

// This user is invalid because username prop is not in the interface we defined
const invalidUser: User = {
  username: "Hayes",
  id: 2,
}
