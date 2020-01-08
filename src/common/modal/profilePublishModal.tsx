import * as React from 'react';
import { Modal, ModalBody} from 'reactstrap';
import {useState} from "react";
import { IconPublish} from "../icons";

import ProffessionalExperienceModalCard from "./professionalExperienceModalCard";
import AwardsAccomplishmentModalCard from "./awardsAccomplishementModalCard";
import KnowledgeSkillsModalCard from "./knowledgeSkillsModalCard";
import ProfileInformationModalCard from "./ProfileInformationModalCard";

const ProfilePublishModal = (props) => {
    const {} = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <button  onClick={toggle} className="line-height-1 bg-transparent border-0 d-flex align-items-center p-0">
                <IconPublish className="text-primary"/>
                <a className="ml-2 text-capitalize f-14 text-dark">publish</a>
            </button>

            <Modal isOpen={modal} toggle={toggle} className="profile-publish-modals">
                <ModalBody className="p-0 overflow-auto bg-transparent">
                   <ProfileInformationModalCard/>
                   <ProffessionalExperienceModalCard/>
                   <AwardsAccomplishmentModalCard/>
                   <KnowledgeSkillsModalCard/>
                </ModalBody>

            </Modal>
        </>
    )
}

export default ProfilePublishModal;