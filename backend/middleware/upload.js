import multer from "multer";
import path from "path";
import fs from "fs";

const ensureUploadPath = (folder) => {
  const uploadPath = path.join(process.cwd(), "uploads", folder);
  fs.mkdirSync(uploadPath, { recursive: true });
  return uploadPath;
};

const createStorage = (folder) => {
  const uploadPath = ensureUploadPath(folder);

  return multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, uploadPath);
    },
    filename: (_req, file, cb) => {
      const timestamp = Date.now();
      const randomSuffix = Math.round(Math.random() * 1e9);
      const extension = path.extname(file.originalname) || "";
      cb(null, `${timestamp}-${randomSuffix}${extension}`);
    },
  });
};

const fileFilter = (_req, file, cb) => {
  if (!file.originalname) {
    cb(new Error("Invalid file name"));
    return;
  }
  cb(null, true);
};

export const messageUpload = multer({
  storage: createStorage("messages"),
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
});

export const avatarUpload = multer({
  storage: createStorage("avatars"),
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});
