import { Apiwp } from 'apiwp';
import { CardModel } from 'common';
import React from 'react';
import { ECardItem } from './ecarditem';


interface Props { }
interface State {
    cards?: CardModel[];

}

export class CardList extends React.Component<Props, State> {
    private api = new Apiwp;

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    public async componentDidMount() {
        const cards = (await this.api.getJson('/posts?categories=4') as any[]).map(CardModel.fromJSON);
        this.setState({ cards });
    }

    public render() {
        const { cards } = this.state;
        if (!cards) { return 'Chargement des nouvelles...'; }

        return <>
            <main className='main u-margin-top-big container'>
                <section className='main-content flex'>
                    {cards.map(card =>
                        <ECardItem key={card.cardId} card={card} />)}
                </section>
                <div className='page flex'>
            <a>&lt; <span>Page précédente</span></a>
            <a><span>Page suivante</span> &gt;</a>
        </div>
            </main>
        </>;
    }
}
