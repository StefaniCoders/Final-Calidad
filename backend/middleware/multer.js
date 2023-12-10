import multer from "multer";
import fs from "node:fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = `public/uploads/`;
    http: fs.mkdirSync(dir, { recursive: true });

    cb(null, dir);
  },

  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

export { storage, upload };
