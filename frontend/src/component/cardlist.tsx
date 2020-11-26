import { Api } from 'api';
import { CardModel } from 'common';
import React from 'react';

interface Props { }
interface State {
    cards?: CardModel[];
    title?: string;
    content?: string;
    publicationDate?: Date;
}

export class CardList extends React.Component<Props, State> {
    private api = new Api;

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    public async componentDidMount() {
        const cards = (await this.api.getJson('/posts') as any[]).map(CardModel.fromJSON);
        this.setState({ cards });
    }

    public render() {
        const { cards } = this.state;
        if (!cards) { return 'Chargement des nouvelles...'; }

        const dateFormat = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return <>

            <body className='main u-margin-top-big container'>


                {cards.map(card => <div key={card.cardId}>
                    <table>
                        <h3>Titre {card.title.rendered}: </h3>
                        <tr>
                            <th>Contenu: </th>
                            <td> {card.content.rendered}</td>
                            {/* <div dangerouslySetInnerHTML={{ __html: ExtensionScriptApis.rendred }} /></td> */}
                        </tr>
                        <tr>
                            <th>Date de publication: </th>
                            <td> {card.publicationDate.toLocaleDateString(undefined /* 'fr-ca' */, dateFormat)}
                            </td>
                        </tr>
                    </table>
                    <br />

                </div>)}
            </body>
        </>;
    }
}
