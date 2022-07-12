const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/img/usersAvatar"));
  },
  filename: (req, file, cb) => {
    cb(
      null,

      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//CONSTANTES
const uploadFile = multer({ storage });

module.exports = uploadFile;
