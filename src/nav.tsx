import React from 'react';
import { Link } from 'react-router-dom';
interface Props { }
interface State { }
export class Nav extends React.Component<Props, State> {
    public render() {
        return <div className='navbar'>
            <div className='navmain'>
                <ul>
                    <Link to='/'>
                        <li> Home </li>
                    </Link>
                </ul>
            </div>
        </div>;
    }
}
