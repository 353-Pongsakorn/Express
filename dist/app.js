"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
// get express application
const app = (0, express_1.default)();
// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// applying the routes to the basepath '/api'
app.use("/api", routes_1.default);
// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        message: "Internal Server Error",
        error: err.message || "Unknown error",
    });
});
app.get("/", (req, res) => {
    const user = {
        firstName: "พงศกร",
        lastName: "ทนานนท์",
        id: "6604101353"
    };
    res.json(user);
});
app.put("/books", (req, res) => {
    const { nickname } = req.body;
    // Logic to update a book would go here
    res.json({
        message: "User updated to nickname",
        nickname
    });
});
app.delete("/books/:id", (req, res) => {
    const { id } = req.params;
    // Logic to delete a book by ID would go here
    res.json({
        message: `Book with id ${id} has been deleted`
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map