var express = require("express");
var router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns a simple hello message.
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello World!
 */
router.get("/", function (req, res, next) {
  res.json({ message: "Hello World!" });
});

module.exports = router;
