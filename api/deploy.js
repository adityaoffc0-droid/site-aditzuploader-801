export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { apiKey, sub, html } = req.body;
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const REPO = "adityaoffc0-droid/site-aditzuploader-801";

  const getRes = await fetch(`https://api.github.com/repos/${REPO}/contents/keys.json`, {
      headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
  });
  const file = await getRes.json();
  const keys = JSON.parse(Buffer.from(file.content, 'base64').toString());

  if (!keys.includes(apiKey)) {
      return res.status(401).json({ error: "API Key tidak terdaftar!" });
  }

  res.status(200).json({ message: "Key valid, deployment dimulai..." });
}
