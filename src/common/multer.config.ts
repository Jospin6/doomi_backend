import { Options as MulterOptions } from "multer";
import multer from "multer";
import { CloudinaryStorageConfig } from "../config/cloudinary.config";

export const multerOptions: MulterOptions = {
  storage: CloudinaryStorageConfig,
};
