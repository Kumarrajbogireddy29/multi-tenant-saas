const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const token = jwt.sign(
    { userId: 1, tenantId: 1, role: "tenant_admin" },
    process.env.JWT_SECRET
  );
  res.json({ token });
});

module.exports = router;
