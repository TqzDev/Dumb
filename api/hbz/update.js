const VERSION_DATA = {
  versionCode: 79,
  versionName: "12.3.4",
  changelog: "Dumb API",
  apkUrl: "-"
};

export default function handler(req, res) {
  res.status(200).json(VERSION_DATA);
}
