import React from 'react';
// import { Link } from 'react-router-dom';
interface Props { }
interface State { }
export class Nav extends React.Component<Props, State> {
    public render() {
        return <div className='header'>
            <div className='flex header__box container-big'>
                <div className='header__logo'>
                    <img src='../img/logo-effix.png' alt='logo' />
                </div>
                <div className='header__nav flex'>
                    <div className='main-nav'>
                        <ul className='main-nav'>
                            <li className='main-nav'><a href=''> Actualités événementielles</a></li>
                        </ul>
                    </div>
                    <ul>
                        <li>Alo</li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
