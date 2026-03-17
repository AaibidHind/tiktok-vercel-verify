export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(
    "tiktok-developers-site-verification=yzM3x8mwvilX8D2GfWarSVk6vxFnSKB5"
  );
}