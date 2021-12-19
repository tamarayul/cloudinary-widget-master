import { openUploadWidget } from '../utils/CloudinaryService';

const ImageUpload = (props) => {

    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget({
            cloudName: props.cloud_name,
            uploadPreset: props.upload_preset,
            tags: props.tags || ["tamara"],
            maxImageWidth: props.max_image_width,
            sources: [
                "local",
                "url",
                "camera"
            ],
        },
            function (error, result) {
                if (!error && result.event === "success") {
                    props.onImageUpload(result.info.public_id);
                }
            });
        myUploadWidget.open();
    };



    return <>
        <button className="greenButton" onClick={uploadImageWidget}>Upload Image</button>

    </>;
};

export default ImageUpload;