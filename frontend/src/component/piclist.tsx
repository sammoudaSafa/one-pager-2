import { Api } from 'api';
import { PicModel } from 'common';
import React from 'react';
import { PicItem } from './picitem';


interface Props { }
interface State {
    images?: PicModel[];
    source_url: string;
}

export class PicList extends React.Component<Props, State> {
    private api = new Api;

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    public async componentDidMount() {
        const images = (await this.api.getJson('/media') as any[]).map(PicModel.fromJSON);
        this.setState({ images });
    }

    public render() {
        const { images } = this.state;
        if (!images) { return 'Chargement des images...'; }

        return <>
            <main className='main u-margin-top-big container'>
                <section className='main-content flex'>
                    {images.map(image =>
                        <PicItem key={image.picId} image={image} />)}
                </section>
            </main>
        </>;
    }
}
