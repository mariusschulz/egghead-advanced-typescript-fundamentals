class User {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  setUsername(username: string) {
    this.username = username;
  }
}

const user = new User("mariusschulz");
const username = user.username.toLowerCase();

console.log(`Username: ${username}`);
