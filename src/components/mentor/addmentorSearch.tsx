import * as React from 'react';
import SavedSearchDropdown from "../dropdown/savedSearch";
import AdvanceSearch from "./advanceSearch";
import AdvancedSearchDropdown from "../dropdown/advanced-search";
import RandomComponent from './random';


const AddMentorSearch = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = (id: number) => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="inner-container min-height-0 p-lg-3">
            <div className="d-flex flex-grow-1 tab-content-wrapper min-height-0 justify-content-between">
                <div className="list-team tab-data left-column bg-primary"></div>
                <div className="px-3 w-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="search-input-group advance-search-input d-flex align-items-center bg-white form-control" id="searchBox">
                            <input className="form-control  border-top-0 border-left-0 border-bottom-0 border-right rounded-0" type="text" placeholder="Search for mentors" />
                            <AdvancedSearchDropdown/>
                        </div>

                        <SavedSearchDropdown openModal={openModal}/>
                    </div>

                    <RandomComponent isOpen={isOpen}></RandomComponent>
                </div>
                    <div className="flex-column main-content tab-data right-column bg-primary">
                </div>
            </div>

        </div>


    );
}


export default  AddMentorSearch;