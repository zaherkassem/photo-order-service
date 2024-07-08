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
exports.getRandomPhotos = void 0;
const axios_1 = __importDefault(require("axios"));
const node_cache_1 = __importDefault(require("node-cache"));
const cache = new node_cache_1.default({ stdTTL: 100, checkperiod: 120 });
const getRandomPhotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const count = parseInt(req.params.count, 10);
    const cacheKey = `randomPhotos_${count}`;
    if (cache.has(cacheKey)) {
        return res.json(cache.get(cacheKey));
    }
    try {
        const response = yield axios_1.default.get(`https://api.unsplash.com/photos/random?count=${count}`, {
            headers: {
                Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
            }
        });
        const photoUrls = response.data.map((photo) => photo.urls.full);
        cache.set(cacheKey, photoUrls);
        res.json(photoUrls);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch photos' });
    }
});
exports.getRandomPhotos = getRandomPhotos;
