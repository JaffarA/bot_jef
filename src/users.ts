import { Users, User } from "./types";
import { loadCsv, writeCsv } from "./csv";
const filepath = "./data/users.csv";

function updateUser(user: User) {
  const line: number = user.line;
  const string: string = [user.id, user.blocked].join(",");
  writeCsv(filepath, line, string);
}

export function getUsers() {
  const rawData = loadCsv(filepath)
    .split("\n")
    .map(line => line.split(","));

  const users: Users = [];
  rawData.forEach((e, i) => {
    const user: User = {
      id: e[0],
      blocked: e[1] === "true" ? true : false,
      line: i,
    };
    users.push(user);
  });

  return users;
}

function findUserById(id: string) {
  const users: Users = getUsers();
  return users.find(user => user.id === id);
}

function blockUser(user: User) {
  if (user.blocked != true) {
    user.blocked = true;
    updateUser(user);
    return true;
  } else {
    return false;
  }
}

function unblockUser(user: User) {
  if (user.blocked == true) {
    user.blocked = false;
    updateUser(user);
    return true;
  } else {
    return false;
  }
}
