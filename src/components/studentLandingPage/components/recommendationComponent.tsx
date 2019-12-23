import * as React from 'react';
import { ApiCallInterface } from '../../../store';
import { getModeledCurrentGoals } from '../models/studentModel';

export interface RecommendationInterface {
    currentGoals: ApiCallInterface;
}

const RecommendationComponent = (props: RecommendationInterface) => {
    const { currentGoals } = props;
    const recommendations = currentGoals && currentGoals.data && currentGoals.data.recommended && getModeledCurrentGoals(currentGoals.data.recommended);

    if (!recommendations || !recommendations.length) return null;
    return (
        <div className="card border-0 card-shadow m-3 m-lg-0 mt-lg-2 flex-shrink-0">
            <div className="card-body text-capitalize">
                <h3 className="card-title mb-0 text-dark text-capitalize pb-2 list-recommendation mb-3 pb-3">{recommendations.length + " recommendations"}</h3>
                <div className="overflow-scroll list-recommendation-section">
                    <ul className="list-group list-group-flush list-recommendation mb-3">
                        {
                            recommendations.map((recommendation, index) => {
                                return (<li className="list-group-item p-0 pb-3 pt-3" key={index}>
                                    <div className="media-left media-recommendation cursor-pointer d-flex">
                                        <img className="media-img mr-3"
                                            src={recommendation.imageUrl ? recommendation.imageUrl : "images/personal_goal.png"} alt="" />
                                        <div className="media-body mb-3">
                                            <p className="mt-0 mb-2 text-dark text-capitalize pb-">
                                                {recommendation.textDescription}</p>
                                            <label className="title-light mb-0 text-capitalize">recommended by</label>
                                            <span className="d-flex text-capitalize">{recommendation.recommendedBy}</span>
                                            <p className="title-light text-capitalize">{recommendation.targetDate}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <button className="btn btn-outline-primary btn-block recommendation-btn text-capitalize" type="button">accept</button>
                                        <button className="btn btn-outline-secondary btn-block recommendation-btn ml-3 mt-0 text-capitalize" type="button">decline</button>
                                    </div>
                                </li>);
                            })
                        }
                    </ul>
                </div>
                <div className="border-0 d-block text-right"><a className="text-primary" href="#">view all</a></div>
            </div>
        </div>
    );
}

export default RecommendationComponent;
