export class ImageModel {
    public imageId: number;
    public media_details: {};


    public static fromJSON(jsonImageModel: ImageModel) {
        const imageModel = new ImageModel;
        Object.assign(imageModel, jsonImageModel);
        return imageModel;
    }
}
