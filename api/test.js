export default function handler(req, res) {
  const { type } = req.query;

  if (type === 'licence' || req.method === 'GET') {
    return res.status(200).json({
      userStatus: 0
    });
  }

  return res.status(200).json({
    token: "hbz-mock-valid-token-2099",
    refresh_token: "hbz-mock-refresh-token-2099",
    expires_in: 315360000
  });
