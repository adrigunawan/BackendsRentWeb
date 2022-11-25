"use strict";

const { User } = require("../model/User");

class Users {
  static getAllUsers(req, res) {
    User.showAllUsers((err, data) => {
      if (err) {
        console.log("Not Connected", err);
      } else {
        res.json({
          title: "Products...",
          message: "All Products",
          status: 200,
          data,
        });
      }
    });
  }

  static getUserById(req, res) {
    let id = req.params.id;
    User.showUserById(id, (err, data) => {
      if (err) {
        console.log("Error", err);
      } else {
        res.json({
          title: "Users",
          message: "Users by id",
          status: 200,
          data,
        });
      }
    });
  }

  static createNewUser(req, res) {
    let payload = req.body;
    User.newUser(payload, (err, data) => {
      if (err) {
        res.json("Error:", err);
      } else {
        res.json({
          message: "Data berhasil ditambahkan...",
          status: 200,
          data,
        });
      }
    });
  }

  static updateUserById(req, res) {
    let payload = req.body;
    let id = req.params.id;

    User.updateUser(id, payload, (err, data) => {
      if (err) {
        console.log('Data gagal di update', err);
      } else {
        res.json({
          message: 'User diupdate...',
          status: 200,
          data
        })
      }
    })
  }

  static deleteUserById(req, res) {
    let payload = req.body;
    let id = req.params.id;

    User.deleteUser(id, payload, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json({
          message: "User deleted",
          status: 200,
          data,
        });
      }
    });
  }
}

module.exports = { Users };
