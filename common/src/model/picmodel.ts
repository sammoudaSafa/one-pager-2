export class PicModel {
    public picId: number;
    public media_details: [];


    public static fromJSON(jsonPicModel: PicModel) {
        const picModel = new PicModel;
        Object.assign(picModel, jsonPicModel);
        return picModel;
    }
}
