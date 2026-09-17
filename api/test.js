export default function handler(req, res) {
  res.status(200).json({"status":"success","userStatus":0,"token":"hbz-mock-valid-token","refresh_token":"hbz-mock-refresh-token","expires_in":315360000,"expiry_date":"2099-12-31T23:59:59.000Z"});
}
