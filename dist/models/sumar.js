"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sumarSchema = new mongoose_1.Schema({
    result: {
        type: Number,
        required: true,
    }
});
exports.default = (0, mongoose_1.model)('Sumar', sumarSchema);
