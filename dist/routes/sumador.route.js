"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sumador_controller_1 = require("../controllers/sumador.controller");
const router = (0, express_1.Router)();
router.post('/sumar', sumador_controller_1.sumar);
exports.default = router;
