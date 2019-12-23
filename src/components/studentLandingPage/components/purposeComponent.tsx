import * as React from 'react';
import { ApiCallInterface } from '../../../store';
import { getPurposeFunctionText, getPurposeIndustryText, getPurposeLocationText } from '../helper/helper';

export interface PurposeInterface {
    purpose: ApiCallInterface;
}

const PurposeComponent = (props: PurposeInterface) => {
    const { data } = props.purpose;
    if (!data) return null;
    return (
        <div className="card border-0 card-purpose tab-data m-3 m-lg-0 d-lg-block active">
            <div className="card-body card-shadow px-3">
                <h3 className="card-title text-primary d-flex justify-content-between text-capitalize border-0">purpose<i className="icon-edit cursor-pointer" /></h3>
                <p className="card-message text-dark mb-0 media-content-msg">{data.text}</p>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb brdcrumb-card mb-0">
                        <li className="breadcrumb-item text-capitalize"><a href="#">{getPurposeFunctionText(data)}</a></li>
                        <li className="breadcrumb-item text-capitalize"><a href="#">{getPurposeIndustryText(data)}</a></li>
                        <li className="breadcrumb-item text-capitalize" aria-current="page">{getPurposeLocationText(data)}</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default PurposeComponent;
