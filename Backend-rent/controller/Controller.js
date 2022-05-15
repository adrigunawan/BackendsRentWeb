"use strict";

class Home {
  static Homepage(req, res) {
    res.json({
      title: "Homepage",
      message: "Welcome to homepage",
      status: 200,
    });
  }
}

module.exports = { Home };
