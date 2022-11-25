"use strict";

const sql = require("../config/database");

class User {
  constructor(id_users, username) {
    this.id_users = id_users;
    this.username = username;
  }

  static showAllUsers(result) {
    let sqlQuery = `SELECT * FROM users`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log(null, err);
      } else {
        let rawData = JSON.parse(JSON.stringify(res));
        let users = [];
        let user;

        rawData.forEach((eachData) => {
          user = new User(eachData.id_users, eachData.username);
          users.push(user);
        });
        console.log("Data users =>", rawData);
        result(null, users);
      }
    });
  }

  static showUserById(id, result) {
    const sqlQuery = `SELECT * FROM user WHERE id_users = ${id}`;
    sql.query(sqlQuery, (err, res) => {
      if (err) throw "Data Error";
      let rawData = JSON.parse(JSON.stringify(res));
      let users = [];
      let user;
      rawData.forEach((eachData) => {
        user = new User(eachData.id_users, eachData.username);
        users.push(user);
      });
      console.log("Data user by id =>", rawData);
      result(null, users);
    });
  }

  static newUser(data, result) {
    let sqlQuery = `INSERT INTO users SET ?`;
    sql.query(sqlQuery, data, (err, res) => {
      if (err) {
        console.log(err, "Data gagal ditambahkan");
        result(null, err);
      } else {
        result(res, "Data berhasil ditambahkan");
      }
    });
  }

  static updateUser(id, data, result) {
    let updatePayload = data;
    let sqlQuery = `UPDATE users SET ? WHERE id_users = ${id}`;

    sql.query(sqlQuery, updatePayload, (err, res) => {
      if (err) {
        console.log(err)
        result(err, null)
      } else {
        console.log('Data berhasil di update...')
        result(null);
      }
    });
  }
  static deleteUser(id, data, result) {
    let payload = data;
    let sqlQuery = `DELETE FROM users WHERE id_users = ${id}`;

    sql.query(sqlQuery, payload, (err, res) => {
      if (err) throw err;
      result("Data berhasil dihapus...", res);
    });
  }
}

module.exports = { User };
