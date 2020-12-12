import { ListItem } from 'common';
import React from 'react';

import { EditableListItem } from './editablelistitem';

interface Props { }

interface State { text: string, list: ListItem[]; }

export class EditableList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            text: '',
            list: []

        };
    }

    public render() {
        return <section className='publicite center' onSubmit={this.createListItem}>
            <h2>Ajouter votre commentaire ici</h2>
            <form>
                <input required={true} value={this.state.text}
                    onChange={event => this.setState({ text: event.target.value })} />
                <button className='btn'>Ajouter</button>
            </form>
            <ul>
                {this.state.list.map(item =>
                    <EditableListItem key={item.text} item={item} />)}
            </ul>
        </section>;
    }



    private createListItem = (event: React.FormEvent) => {
        event.preventDefault();
        this.state.list.push({ text: this.state.text });
        this.setState({ list: this.state.list, text: '' });
    };

}
