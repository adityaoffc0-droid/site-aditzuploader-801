export default async function handler(req, res) {
  // connection function 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // fuck request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const randomPart = Math.random().toString(36).substring(2, 10) + 
                     Math.random().toString(36).substring(2, 10);
  
  res.status(200).json({ apiKey: `adtz-${randomPart}` });
}
