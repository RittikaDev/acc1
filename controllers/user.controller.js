let users = [
  {
    id: 1,
    name: "Jake",
    gender: "Male",
    contact: "09846824",
    address: "London",
    photoUrl: "Jake Here",
  },
  {
    id: 2,
    name: "Harry",
    gender: "Male",
    contact: "0386394",
    address: "USA",
    photoUr: "Harry Here",
  },
  {
    id: 3,
    name: "Andre",
    gender: "Female",
    contact: "028492694",
    address: "Japan",
    photoUr: "Andre Here",
  },
];

module.exports.getAllUser = (req, res, next) => {
  const { limit, page } = req.query;
  console.log(limit, page);
  // undefined.test();
  res.json(users.slice(0, limit));
  // res.send(users);
};
module.exports.getARandomUser = (req, res, next) => {
  let a = Math.floor(Math.random() * 3) + 1;
  console.log(a);
  let user = users.filter((user) => user.id === a);
  console.log(user);
  res.send(user);
};

module.exports.saveAUser = (req, res, next) => {
  res.send("User Found");
};
