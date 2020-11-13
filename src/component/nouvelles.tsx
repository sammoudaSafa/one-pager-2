import React from 'react';

interface Props { }

interface State { }

export class Nouvelles extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            nouvelles: []
        };
    }
    public componentDidMount() {
        const nouvellesURL = 'https://effix-commerce.bianka.devwebgarneau.com/wp-json/wp/v2/posts';
        // tslint:disable-next-line: no-floating-promises
        fetch(nouvellesURL)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    nouvelles: response
                });
            });
    }
    public render() {
        return <div>
            <h2> Nouvelles</h2>
        </div>;
    }
}
