import { Request, Response } from 'express';
import axios from 'axios';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const getRandomPhotos = async (req: Request, res: Response) => {
  const count = parseInt(req.params.count, 10);

  if (isNaN(count) || count <= 0) {
        return res.status(400).json({ error: 'Invalid count parameter. Count must be a  positive number.' });
  }

  const cacheKey = `randomPhotos_${count}`;

  if (cache.has(cacheKey)) {
    return res.json(cache.get(cacheKey));
  }

  try {
    const response = await axios.get(`https://api.unsplash.com/photos/random?count=${count}`, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      }
    });

    const photoUrls = response.data.map((photo: any) => photo.urls.full);
    cache.set(cacheKey, photoUrls);
    res.json(photoUrls);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
};

export { getRandomPhotos };
