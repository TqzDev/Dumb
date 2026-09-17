module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.status(200).json({
    status: "success",
    key: "*****00-00*****",
    max_devices: 1,
    used_devices: 0,
    created_date: "2025-12-01T00:00:00.000Z",
    expiry_date: "2099-12-31T23:59:59.000Z",
    is_registered: false,
    userStatus: 0,
    token: "hbz-mock-valid-token-2099",
    refresh_token: "hbz-mock-refresh-token-2099",
    expires_in: 315360000
  });
};
