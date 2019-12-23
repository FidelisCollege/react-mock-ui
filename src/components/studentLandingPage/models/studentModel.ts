import { GoalListPropsInterface } from "../components/goalListComponent";
import { TeamListItem } from "../components/teamListComponent";
import { StudentLandingProps } from "../containers/studentLandingContainer";
import { getFullDateString, getCurrentFullDateString } from "../../../utils/utilFunctions";

export enum statusTypes {
    IN_PROGRESS = 'In Progress',
    PENDING = 'Pending',
    COMPLETE = 'Complete',
}

export const getModeledCurrentGoals = (goalsAndMilestones: any[]) => {
    return goalsAndMilestones.map(
        (goal) => {
            const currentGoal: GoalListPropsInterface = {
                imageUrl: goal.imageUrl,
                textDescription: goal.name,
                appType: goal.appType,
                targetDate: goal.deadlineY ? getCurrentFullDateString(goal.deadline) : '',
                status: statusTypes.IN_PROGRESS,
                progress: goal.percentageCompleted + '%',
                recommendedBy: goal.recommendedBy
            }

            return currentGoal;
        }
    );
}

export const getModeledFutureGoals = (wishlist: any[]) => {
    return wishlist.map(
        (goal) => {
            const futureGoal: GoalListPropsInterface = {
                imageUrl: goal.imageUrl,
                textDescription: goal.title,
                appType: goal.type,
                targetDate: '',
                status: statusTypes.PENDING,
                progress: '0%'
            }

            return futureGoal;
        }
    );
}

export const getModeledHistoryGoals = (goalHistory: any[]) => {
    return goalHistory.map(
        (goal) => {
            const historyGoal: GoalListPropsInterface = {
                imageUrl: goal.imageUrl,
                textDescription: goal.name,
                appType: goal.type,
                targetDate: goal.deadline ? getFullDateString(goal.completedTimestamp) : '',
                status: statusTypes.COMPLETE,
                progress: '100%'
            }

            return historyGoal;
        }
    );
}

export const getModeledCommunitiesData = (memberCommunities: any[]) => {
    return memberCommunities.map(
        (community) => {
            const { communityId, communityName, logoUrl, activityFeedCount } = community;

            const communityModel: TeamListItem = {
                id: communityId,
                fullName: communityName,
                avatar: {
                    picSmall: logoUrl
                },
                badgeValue: activityFeedCount
            };

            return communityModel;
        }
    );
}

export const getTeamProps = (props: StudentLandingProps) => {
    const { mentorList, menteeList, communityList } = props;

    return ([
        { listTitle: 'Mentors', list: mentorList.data ? mentorList.data.data : [] },
        { listTitle: 'Mentees', list: menteeList.data ? menteeList.data.data : [] },
        {
            listTitle: 'Communities',
            list: communityList.data ?
                getModeledCommunitiesData(communityList.data.memberCommunities) :
                []
        }
    ]);
}