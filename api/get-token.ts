import { AccessToken } from 'livekit-server-sdk';

export default async function handler(req: any, res: any) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Get params from query or body
  const identity = (req.query?.identity as string) || (req.query?.participantName as string) || (req.body?.identity as string) || (req.body?.participantName as string) || `user_${Math.random().toString(36).substring(2, 11)}`;
  const room = (req.query?.room as string) || (req.query?.roomName as string) || (req.body?.room as string) || (req.body?.roomName as string) || `room_${Math.random().toString(36).substring(2, 11)}`;

  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const serverUrl = process.env.LIVEKIT_URL;

  if (!apiKey || !apiSecret) {
    return res.status(500).json({ error: 'LIVEKIT_API_KEY or LIVEKIT_API_SECRET is missing' });
  }

  try {
    const at = new AccessToken(apiKey, apiSecret, { identity });
    at.addGrant({ roomJoin: true, room });
    const token = await at.toJwt();
    return res.status(200).json({ token, serverUrl });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || String(err) });
  }
}
