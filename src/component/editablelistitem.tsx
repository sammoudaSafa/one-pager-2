import React from 'react';
import { CommentItem } from '../model/commentitem';

interface Props { item: CommentItem; }

interface State { }

export class EditableListItem extends React.Component<Props, State> {

    public render() {
        return <li>
            {this.props.item.text}
        </li>;
    }

}
