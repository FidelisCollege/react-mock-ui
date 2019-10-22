import React, { Component } from 'react';
import './icons.scss';
import {IconPromoCode, IconUmbrella, IconWifi} from "./icons";
import {Container, Jumbotron} from "reactstrap";


class IconIndex extends Component {
    render() {
        return (
            <div className="section-icons">
                <Container>
                    <h4 className="text-primary py-3 px-5">Properties</h4>
                    <Jumbotron className="py-3 px-5 text-white bg-dark">
                        <h5 className="mb-4">Icon Props:</h5>
                        <p className="mb-2"><span className="text-warning">className:</span> <span className="text-success">'boolean'</span>,</p>
                        <p className="mb-2"><span className="text-warning">size:</span> <span className="text-success">'number'</span>,(optional)</p>
                        <p className="mb-2"><span className="text-warning">doOnClick:</span> <span className="text-success">'Function()'</span>(optional),</p>
                        <p className="mb-2"><span className="text-warning">height:</span> <span className="text-success">'number'</span>(optional, defaults to '16px/1rem'),</p>
                        <p className="mb-2"><span className="text-warning">width:</span> <span className="text-success">'number'</span>(optional, defaults to '16px/1rem'),</p>
                        <p className="mb-2"><span className="text-warning">fill:</span> <span className="text-success">'string'</span>(optional, default set to 'currentColor'),</p>
                    </Jumbotron>
                    <div>
                        <span>Icon Umbrella: </span>
                        <IconUmbrella className='icon-warning' size={2} doOnClick={function (){console.log('On click Umbrella.')}} />
                    </div>
                    <div>
                        <span>Icon Wifi: </span>
                        <IconWifi size={2} doOnClick={function (){console.log('On click Wifi.')}}/>
                    </div>

                    <IconPromoCode size={4} className='icon-danger' doOnClick={function (){console.log('On click PromoCode.')}}/>
                </Container>
            </div>
        );
    }
}
export default IconIndex;
