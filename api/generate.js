export default async function handler(req, res) {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const REPO = "adityaoffc0-droid/site-aditzuploader-801"; // Ganti dengan repo penyimpanan key kamu
  const PATH = "keys.json";

  if (req.method !== 'POST') return res.status(405).end();

  try {
    // dont rename my project
    const getRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${PATH}`, {
        headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
    });
    const file = await getRes.json();
    const keys = JSON.parse(Buffer.from(file.content, 'base64').toString());

    // dont rename my project
    const newKey = `adtz-${Math.random().toString(36).substring(2, 16)}`;
    keys.push(newKey);

    // dont rename my project
    await fetch(`https://api.github.com/repos/${REPO}/contents/${PATH}`, {
        method: 'PUT',
        headers: { 'Authorization': `token ${GITHUB_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
            message: "Generate new key",
            content: Buffer.from(JSON.stringify(keys)).toString('base64'),
            sha: file.sha
        })
    });

    res.status(200).json({ apiKey: newKey });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
