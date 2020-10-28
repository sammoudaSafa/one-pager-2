import React from 'React';
import { Link } from 'react-router-dom';
import { Nav } from './Nav';
interface Props { }
interface State { }
export class Home extends React.Component<Props, State> {
    public render() {
        return <div>
            <Nav />
            <h1>Cliquer ici pour jouer</h1>
            <Link to='/personList'><button>Jouer</button></Link>
        </div>;
    }
}
