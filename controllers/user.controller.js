const fs = require("fs");
let users = JSON.parse(fs.readFileSync(`${__dirname}/../data.json`));
console.log(users);

// let users = [
//   {
//     id: 1,
//     name: "Jake",
//     gender: "Male",
//     contact: "09846824",
//     address: "London",
//     photoUrl: "Jake Here",
//   },
//   {
//     id: 2,
//     name: "Harry",
//     gender: "Male",
//     contact: "0386394",
//     address: "USA",
//     photoUrl: "Harry Here",
//   },
//   {
//     id: 3,
//     name: "Andre",
//     gender: "Female",
//     contact: "028492694",
//     address: "Japan",
//     photoUrl: "Andre Here",
//   },
// ];

module.exports.getAllUser = (req, res, next) => {
  const { limit, page } = req.query;
  // undefined.test();
  res.json(users.slice(0, limit));
  // res.send(users);
};
module.exports.getARandomUser = (req, res, next) => {
  let a = Math.floor(Math.random() * 3) + 1;
  let user = users.filter((user) => user.id === a);
  res.send(user);
};

module.exports.saveARandomUser = (req, res, next) => {
  if (
    req.body.hasOwnProperty("id") &&
    req.body.hasOwnProperty("name") &&
    req.body.hasOwnProperty("gender") &&
    req.body.hasOwnProperty("contact") &&
    req.body.hasOwnProperty("address") &&
    req.body.hasOwnProperty("photoUrl")
  ) {
    users.push(req.body);
    res.send(users);
  } else {
    res.send("Missed some properties!!");
  }
};

module.exports.updateARandomUser = (req, res, next) => {
  const { id } = req.params;
  const newData = users.find((user) => user.id === Number(id));

  newData.id = id;
  newData.name = req.body.name;
  newData.gender = req.body.gender;
  newData.contact = req.body.contact;
  newData.address = req.body.address;
  newData.photoUrl = req.body.photoUrl;
  res.send(newData);
};

module.exports.bulkUpdate = (req, res, next) => {
  const newData = req.body.data;

  newData.map((data) => {
    users.find((user) => {
      if (user.id === data.id) {
        user.id = data.id;
        if (data.updatedBody.name) {
          user.name = data.updatedBody.name;
        } else {
          user.name = user.name;
        }
        if (data.updatedBody.gender) {
          user.gender = data.updatedBody.gender;
        } else {
          user.gender = user.name;
        }
        if (data.updatedBody.contact) {
          user.contact = data.updatedBody.contact;
        } else {
          user.contact = user.contact;
        }
        if (data.updatedBody.address) {
          user.address = data.updatedBody.address;
        } else {
          user.address = user.address;
        }
        if (data.updatedBody.address) {
          user.address = data.updatedBody.address;
        } else {
          user.address = user.address;
        }
        if (data.updatedBody.photoUrl) {
          user.photoUrl = data.updatedBody.photoUrl;
        } else {
          user.photoUrl = user.photoUrl;
        }
      }
    });
  });

  res.send(newData);
};

module.exports.deleteAUser = (req, res, next) => {
  const { id } = req.params;

  const filter = { _id: id };

  users = users.filter((user) => user.id !== Number(id));
  res.send(users);
};
