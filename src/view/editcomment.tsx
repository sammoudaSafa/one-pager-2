import { EditableListItem } from 'component/editablelistitem';
import React from 'react';
import { CommentItem } from '../model/commentitem';
interface Props { }

interface State { text: string, list: CommentItem[]; }

export class EditComment extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            text: '',
            list: [
                { text: 'Rejoignez ce réseau' },
                { text: 'def' },
                { text: 'ghijklmnopqrst asd asd asd' }
            ]
        };
    }

    public render() {
        return <div onSubmit={this.createListItem}>
            <form>
                <input required={true} value={this.state.text}
                    onChange={event => this.setState({ text: event.target.value })} />
                <button>Ajouter un commentaire</button>
            </form>
            <ul>
                {this.state.list.map(item =>
                    <EditableListItem key={item.text} item={item}
                    />)}
            </ul>
        </div>;
    }
    private createListItem = (event: React.FormEvent) => {
        event.preventDefault();
        this.state.list.push({ text: this.state.text });
        this.setState({ list: this.state.list, text: '' });
    };

}
