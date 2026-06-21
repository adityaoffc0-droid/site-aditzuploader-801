Import { nanoid } from 'nanoid';

export default async function handler(req, res) {
  const apiKey = `adtz-${nanoid(16)}`;
  res.status(200).json({ apiKey: apiKey });
}


Itu kotak editor yabg mana
