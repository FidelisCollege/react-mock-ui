import * as React  from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class AdvanceSearch extends React.Component<{},any> {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        return (
            <div>
                <button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default AdvanceSearch;