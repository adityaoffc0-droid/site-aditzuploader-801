export default async function handler(req, res) {
  // api key js 6767
  const randomPart = Math.random().toString(36).substring(2, 10) + 
                     Math.random().toString(36).substring(2, 10);
  
  const apiKey = `adtz-${randomPart}`;

  res.status(200).json({ apiKey: apiKey });
}
