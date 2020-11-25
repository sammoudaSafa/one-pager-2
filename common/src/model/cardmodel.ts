export class CardModel {
    public cardId: number;
    public title: string;
    public content: string;
    public publicationDate: Date;

    public static fromJSON(jsonCardModel: CardModel) {
        const cardModel = new CardModel;
        Object.assign(cardModel, jsonCardModel);
        cardModel.publicationDate = new Date(cardModel.publicationDate);
        return cardModel;
    }
}
