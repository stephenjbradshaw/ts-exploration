// Class without type declarations
class UserAccount {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}
const Murphy = new UserAccount("Murphy", 1);

// Define User interface
interface User {
  name: string,
  id: number,
}

// Class with type declarations
class TsUserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

// tsMurphy object matches User interface
const tsMurphy: User = new TsUserAccount("Murphy2", 2);

// Invalid instance
const tsStephen: User = new TsUserAccount(2, 1)
