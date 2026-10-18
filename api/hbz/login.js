const RESPONSE_DATA = {
  status: "success",
  expiry_date: "31-12-2099 00:00:00"
};

export default function handler(req, res) {
  res.status(200).json(RESPONSE_DATA);
}
