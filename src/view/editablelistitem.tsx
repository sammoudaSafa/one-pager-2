import React from 'react';
import { ListItem } from '../model/listitem';

interface Props { item: ListItem; }

interface State { }

export class EditableListItem extends React.Component<Props, State> {

    public render() {
        return <li className={this.props.item.done ? 'done' : ''}>
            <input type='checkbox' checked={!!this.props.item.done} />
            {this.props.item.text}
        </li>;
    }

}
