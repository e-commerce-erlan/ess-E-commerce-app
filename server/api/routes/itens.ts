module.exports = () => {
    const express = require("express");
    const router = express.Router();
    const controller = require("../controllers/itens")();

    router.get("/:id", controller.listProducts);
    router.post("/", controller.createItem);

    return router;
  };