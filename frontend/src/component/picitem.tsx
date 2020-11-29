import { PicModel } from 'common';
import React from 'react';

interface Props { image: PicModel; }

interface State {
    picId: number;
    source_url: string;
}

export class PicItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { picId: props.image.picId, source_url: props.image.source_url };
    }

    public render() {

        return <div >
            <img className='article__img u-margin-bottom-small' src={this.props.image.source_url} alt='alo' />
        </div>
            ;
    }

}
