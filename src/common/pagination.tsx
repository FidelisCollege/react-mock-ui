import * as React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {IconleftCaret, IconRightCaret} from "./icons";

const PaginationComponent = (props) => {
    return (
       <div className="d-lg-none pagination-compponent">
           <a className="pagination-icon-wrapper" href="">
               <IconleftCaret/>
           </a>
           <a className="page-count" href="">1 of 5</a>
           <a className="pagination-icon-wrapper" href="">
               <IconRightCaret/>
           </a>
       </div>
    );
}

export default PaginationComponent;