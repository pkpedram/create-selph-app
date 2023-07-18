const multer = require("multer");
const upload = (additionalName = '') =>  multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "media/");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.originalname.split(".")[0] +
          "_" + additionalName + '.'  +
          file.originalname.split(".")[1]
      );
    },
  }),
});

module.exports = {
    upload
}