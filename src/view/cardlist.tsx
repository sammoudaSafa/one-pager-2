import { CardItem } from 'model/carditem';
import React from 'react';
import { EditCardItem } from './editcarditem';

interface Props { }

interface State { listofcard: CardItem[]; }

export class CardList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            listofcard: [
                { title: 'awel card' },
                { title: 'thani card' }
            ]
        };
    }
    public componentDidMount() {
        // const nouvellesURL = 'https://effix-commerce.bianka.devwebgarneau.com/wp-json/wp/v2/posts';
        // tslint:disable-next-line: no-floating-promises
        // fetch(nouvellesURL)
        //     .then(response => response.json())
        //     .then(response => {
        //         this.setState({
        //             listofcard: response
        //         });
        //     });
    }
    public render() {
        return <div>
            <h1>HEre come all the cards</h1>
            <ul>
                {this.state.listofcard.map(card =>
                    <EditCardItem key={card.title} card={card} />)}
            </ul>
        </div>;
    }

}
