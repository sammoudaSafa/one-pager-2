import axios from 'axios';
import { PubliciteModel } from 'common';
import React from 'react';
import { PubCard } from './pubcard';


interface Props { }
interface State {
    pubs?: PubliciteModel [];

}

export class PubList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            pubs: [],
        };
    }

    public async componentDidMount() {

        axios.get('http://localhost:1280/publicites')
            .then(res => this.setState({

                pubs: res.data,
            }))
            .catch(err => console.log(err));
    }

    public render() {
        const { pubs } = this.state;
        console.log({ pubs});
        if (!pubs) { return 'Chargement des publicités...'; }

 return <>
 <section className='publicite center'>
            <div className='publicite__img'>
 {pubs.map(pub =>
                        <PubCard key={pub.publiciteId} pub={pub} />)}
                         {/* <button onClick={() => this.randomItem({ this.state. })}>delete all</button> */}
            </div>
            </section>

</>
    }
    // private createListItem = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     this.state.list.push({ text: this.state.text });
    //     this.setState({ list: this.state.list, text: '' });
    // };
    private randomItem = (tab: []) => {
        console.log(tab.length);
        // this.state.tab.length({ text: this.state.text });
        // this.setState({ list: this.state.list, text: '' });
    };
}
