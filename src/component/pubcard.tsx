import { PubliciteModel } from 'common';
import React from 'react';

interface Props { pub: PubliciteModel; }

interface State {
    publiciteId: number;
    lien: string ;
    image: string ;
    nom_client: string;

}

export class PubCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { publiciteId:props.pub.publiciteId, nom_client:props.pub.nom_client, lien: props.pub.lien, image:props.pub.image };
    }

    public render() {

        return <>
       <a href={this.props.pub.lien} ><img src={this.props.pub.image} alt={this.props.pub.nom_client}/></a>
            </>;

    }

}
