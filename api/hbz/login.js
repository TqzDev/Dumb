export default function handler(req, res) {
  res.status(200).json({"status": "success","expiry_date": "31-12-2099 00:00:00"});
}
