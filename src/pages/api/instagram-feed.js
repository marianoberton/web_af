import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { FB_TOKEN } = process.env;

  try {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${FB_TOKEN}`);
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ error: data.error });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Instagram API' });
  }
}
