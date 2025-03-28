import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './cloudinary/cloudinary-response';
const streamifier = require('streamifier');

@Injectable()
export class CloudinaryService {
  uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ folder: 'listings' }, (error, result) => {
          if (error) {
            console.error('Erreur d’upload Cloudinary:', error);
            return reject(error);
          }
          if (result) {
            resolve(result as CloudinaryResponse);
          } else {
            reject(new Error('Cloudinary upload returned undefined result'));
          }
        }).end(file.buffer);
      });
  }
}
