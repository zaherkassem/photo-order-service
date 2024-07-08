"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const photoRoutes_1 = __importDefault(require("./routes/photoRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Routes
app.use('/api/photos', photoRoutes_1.default);
app.use('/api/orders', orderRoutes_1.default);
// Connect to MongoDB
mongoose_1.default.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // Add this line if you're using Mongoose < 6.x
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Failed to connect to MongoDB', error);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
