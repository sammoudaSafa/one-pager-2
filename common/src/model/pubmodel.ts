export class PubModel {
    public pubId: number;
    public title: string;
    public link: string;
    public featured_image_src: string;

    public static fromJSON(jsonPubModel: PubModel) {
        const pubModel = new PubModel;
        Object.assign(pubModel, jsonPubModel);
        return pubModel;
    }
}
