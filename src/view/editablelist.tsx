import React from 'react';
import { ListItem } from '../model/listitem';
import { EditableListItem } from './editablelistitem';

interface Props { }

interface State { text: string, list: ListItem[]; }

export class EditableList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            text: '',
            list: [
                { text: 'asd' },
                { text: 'def', done: true },
                { text: 'ghijklmnopqrst asd asd asd' }
            ]
        };
    }

    public render() {
        return <div>
            <form>
                <input required={true} value={this.state.text}
                    onChange={event => this.setState({ text: event.target.value })} />
                <button>Créer</button>
            </form>
            <ul>
                {this.state.list.map(item =>
                    <EditableListItem key={item.text} item={item} />)}
            </ul>
            <button onClick={() => this.setState({ list: [] })}>delete all</button>
        </div>;
    }

}
