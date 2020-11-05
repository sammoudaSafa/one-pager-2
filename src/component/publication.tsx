// import React from 'react';
// import { ListItem } from '../model/listitem';
// import { EditableListItem } from './editablelistitem';

// interface Props { }

// interface State { text: string, list: ListItem[]; }

// export class Publication extends React.Component<Props, State> {

//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             text: '',
//             list: [
//                 { text: 'asd' },
//                 { text: 'de' },
//                 { text: 'ghijklmnopqrst asd asd asd' }
//             ]
//         };
//     }

//     public render() {
//         return <div onSubmit={this.createListItem}>
//             <form>
//                 <input required={true} value={this.state.text}
//                     onChange={event => this.setState({ text: event.target.value })} />
//                 <button>Ajouter Commentaire</button>
//             </form>
//             <ul>
//                 {this.state.list.map(item =>
//                     <EditableListItem key={item.text} item={item}
//                         swapDone={() => this.swapDone(item)} />)}
//             </ul>
//         </div>;
//     }

//     // private deleteItem = (itemToDelete: ListItem) => {
//     //     const newList = this.state.list.filter(item => item !== itemToDelete);
//     //     this.setState({ list: newList });
//     // };

//     private createListItem = (event: React.FormEvent) => {
//         event.preventDefault();
//         this.state.list.push({ text: this.state.text });
//         this.setState({ list: this.state.list, text: '' });
//     };

// }
