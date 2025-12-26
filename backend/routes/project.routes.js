const router = require("express").Router();
const auth = require("../middleware/auth");

router.get("/", auth, (req, res) => {
  res.json([
    {
      id: 1,
      name: "Demo Project",
      tenantId: req.user.tenantId
    }
  ]);
});

module.exports = router;
