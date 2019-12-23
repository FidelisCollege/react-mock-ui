import * as React from 'react';
import GoalListComponent, { GoalListPropsInterface } from './goalListComponent';
// import LoaderComponent from '../../../common/components/loaderComponent';
// import { LoaderSizes } from '../../../common/models/commonModel';

export interface GoalListContainerPropsInterface {
    goalListData: GoalListPropsInterface[];
    addEnabled: boolean;
    loading: boolean;
}

const GoalListContainerComponent = (props: GoalListContainerPropsInterface) => {
    const { goalListData, addEnabled, loading } = props;

    // if (loading || !goalListData) return <LoaderComponent loading={loading} size={LoaderSizes.MEDIUM} />;

    return (
        <>
            <ul className="list-unstyled px-2 px-lg-0 mb-lg-0 overflow-scroll list-view">
                {
                    goalListData.map((goalData: GoalListPropsInterface, index: number) => {
                        return <GoalListComponent key={index} {...goalData} />
                    })
                }
            </ul>
            <div className="calendar-view">Calendar View</div>
            {
                addEnabled && (
                    <button className="d-lg-none btn-block-custom">
                        <i className="icon-add mr-2" />
                        Add New Goal
                    </button>
                )
            }
        </>
    );
}

export default GoalListContainerComponent;