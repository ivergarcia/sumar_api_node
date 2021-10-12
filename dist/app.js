"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const passport_2 = __importDefault(require("./middlewares/passport"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const special_route_1 = __importDefault(require("./routes/special.route"));
const sumador_route_1 = __importDefault(require("./routes/sumador.route"));
//Initializations
const app = (0, express_1.default)();
// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
//app.use(express.urlencoded({extended: false}));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
// Routes
app.get('/', (req, res) => {
    res.send(`THIS IS API: http://localhost:${app.get('port')}`);
});
app.use(auth_route_1.default);
app.use(special_route_1.default);
app.use('/api', sumador_route_1.default);
exports.default = app;
