import * as React from 'react';
import {Card} from "reactstrap";
import {IconAdd} from "../../common";
import ProfileCompletionCard from "../../common/card/profileCompletionCard";
import ProfileExperienceCard from "../../common/card/proffesionalExperienceCard";
import MilitaryExperienceCard from "../../common/card/militeryExperienceCard";
import ProffessionalOrganizationCard from "../../common/card/proffessionalOrganizationCard";
import EducationCard from "../../common/card/educationCard";
import TextScoresCard from "../../common/card/textScoresCard";
import KnowledgeSkillsCard from "../../common/card/knowledgeSkillsCard";
import AwardsCard from "../../common/card/awardsCard";
import InterestCard from "../../common/card/interestCard";
import CommunitiesCard from "../../common/card/communitiesCard";



const ProfileRightSection = () => {

    return (
        <div className="mx-md-3 d-flex flex-grow-1">
            <div className="w-100  overflow-auto">
                <ProfileCompletionCard/>
                <ProfileExperienceCard/>
                <MilitaryExperienceCard/>
                <ProffessionalOrganizationCard/>
                <EducationCard/>
                <TextScoresCard/>
                <KnowledgeSkillsCard/>
                <AwardsCard/>
                {/*<InterestCard/>*/}
                {/*<CommunitiesCard/>*/}
            </div>
        </div>
    );
}

export default ProfileRightSection;
