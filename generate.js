// file: api/generate.js
import { Redis } from '@upstash/redis';
import { nanoid } from 'nanoid';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = `adtz-${nanoid(16)}`;

  await redis.set(`apikey:${apiKey}`, { status: 'active', createdAt: new Date() });

  return res.status(200).json({ apiKey });
}
