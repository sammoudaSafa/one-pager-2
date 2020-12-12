import { ListItem } from 'common';
import React from 'react';


interface Props { item: ListItem; }

interface State { }

export class EditableListItem extends React.Component<Props, State> {

    public render() {
        return <li>
            {this.props.item.text}
        </li>;
    }

}
