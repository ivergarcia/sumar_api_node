"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumar = void 0;
const sumar_1 = __importDefault(require("../models/sumar"));
const sumar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.valor1 || !req.body.valor2) {
        return res
            .status(400)
            .json({ msg: "Porfavor, ingrese valores al valor1 y valor2" });
    }
    const newResult = req.body.valor1 + req.body.valor2;
    const newSumar = new sumar_1.default({ result: newResult });
    yield newSumar.save();
    return res.status(201).json(newSumar);
});
exports.sumar = sumar;
