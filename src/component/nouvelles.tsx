import React from 'react';

interface Props { }

interface State { }

export class Nouvelles extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return <div>
            <h2> Nouvelles</h2>
        </div>;
    }
}
