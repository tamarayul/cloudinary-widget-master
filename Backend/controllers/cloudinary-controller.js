import HttpError from '../models/http-error.js';
import { cld_cloud_name, cld_api_secret, cld_api_key } from '../config.js';
import cloudinary from 'cloudinary';

const getPhotos = async (req, res, next) => {
    try {
        const options = {
            cloudName: cld_cloud_name,
            format: 'json',
            type: 'list',
            version: Math.ceil(new Date().getTime() / 1000),
        };

        const urlPath = url('cl-tamara_yulevich', options);

        const response = await fetch(urlPath);
        res.status(200).json(response);
    } catch (error) {
        const err = new HttpError(
            "Failed to fetch photos", 500
        );
        return next(err);
    }

};

const deleteAllPhotos = async (req, res, next) => {
    console.log('sav 2');
    try {
        const options = {
            cloud_name: cld_cloud_name,
            api_key: cld_api_key,
            api_secret: cld_api_secret
        };

        console.log(options);

        cloudinary.v2.api.delete_resources_by_tag('cl-tamara_yulevich', options,
            function (error, result) {
                console.log(result, error);
            });
        res.status(204).json();
    } catch (error) {
        const err = new HttpError(
            "Failed to fetch photos", 500
        );
        return next(err);
    }
};

export { getPhotos, deleteAllPhotos };