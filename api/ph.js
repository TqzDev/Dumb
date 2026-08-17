export async function GET() {
  return Response.json({
    valid: true,
    reason: "ok",
    exp: "2099-12-31",
    message: "ใช้งานได้"
  });
}
