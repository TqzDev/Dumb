const VERSION_DATA = "12.3.4 Dumb API";

export default function handler(req, res) {
  res.status(200).json(VERSION_DATA);
}
