export default function handler(req, res) {
  res.status(200).json({
    valid: true,
    reason: "ok",
    exp: "2099-12-31",
    message: "ใช้งานได้"
  });
}
