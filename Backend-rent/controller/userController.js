"use strict";

class Users {
  static pageUsers(req, res) {
    res.json({
      title: "Users",
      message: "Halaman Users",
      status: 200,
    });
  }
}

module.exports = { Users };
