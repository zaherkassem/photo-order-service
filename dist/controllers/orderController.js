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
exports.getUserOrders = exports.createOrder = void 0;
const orderModel_1 = __importDefault(require("../models/orderModel"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, fullName, fullAddress, imageUrls, frameColor, user } = req.body;
    try {
        const newOrder = new orderModel_1.default({
            email,
            fullName,
            fullAddress,
            imageUrls,
            frameColor,
            user
        });
        const savedOrder = yield newOrder.save();
        res.status(201).json(savedOrder);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create order' });
    }
});
exports.createOrder = createOrder;
const getUserOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const orders = yield orderModel_1.default.find({ user: userId });
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});
exports.getUserOrders = getUserOrders;
