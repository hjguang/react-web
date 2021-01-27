const express = require("express");
const mediaCtr = require("../controllers/media.controller");

const router = express.Router();


router.route('/api/media/popular').get(mediaCtr.listPopular)
router.route('/api/media/video/:mediaId').get(mediaCtr.video)
router.route('/api/media/:mediaId')
  .get( mediaCtr.read)

router.param('mediaId', mediaCtr.mediaByID)

module.exports = router