// import * as React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Popover, PopoverBody } from 'reactstrap';
// import * as api from '../../../services/api';
// import { apiConfig } from '../../../config/apiConfig';
// // import { LogoutActionsInterface, logoutAction } from '../../../common/actions';
// import { connect } from 'react-redux';
// import { StateInterface, ApiCallInterface } from '../../../store';
// import { SideBarNavlinkProps } from './sideBarNavlinkComponent';
//
// export interface ProfileProps extends LogoutActionsInterface, SideBarNavlinkProps {
//     logoutResponse: ApiCallInterface;
// }
//
// export interface ProfileState {
//     isPopupOpen: boolean;
// }
//
// class ProfileComponent extends React.Component<ProfileProps, ProfileState> {
//     constructor(props: ProfileProps, state: ProfileState) {
//         super(props, state);
//
//         this.state = {
//             isPopupOpen: false,
//         }
//     }
//
//     componentDidUpdate(prevProps: ProfileProps) {
//         if (!this.props.logoutResponse.loading && this.props.logoutResponse.data &&
//             (prevProps.logoutResponse.data !== this.props.logoutResponse.data)
//         ) {
//             // Clear local storage
//             localStorage.clear();
//
//             // Redirect to fidelis login page
//             window.location.assign(api.getBase(apiConfig) + '/login');
//         }
//     }
//
//     togglePopover = () => {
//         this.setState({ isPopupOpen: !this.state.isPopupOpen })
//     }
//
//     logOutUser = () => {
//         const { logoutAction } = this.props;
//
//         // Clear cookies
//         logoutAction();
//     }
//
//     render() {
//         const { isPopupOpen } = this.state;
//         const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
//
//         return (
//             <>
//                 <a className="left-nav-item user-profile" id="my-account-popover" href="#">
//                     <img
//                         src={user && user.avatar && user.avatar.picSmall}
//                         alt=""
//                         className="user-profile-img rounded-circle"
//                     />
//                     <span className="left-nav-text">Profile</span>
//                 </a>
//
//                 <Popover placement="right" trigger="focus" isOpen={isPopupOpen} target="my-account-popover" toggle={this.togglePopover}>
//                     <PopoverBody>
//                         <div className="" id="popover-content-my-account-popover">
//                             <ul className="list-popover p-0 m-0">
//                                 <li>
//                                     <NavLink className="list-popover-item text-capitalize" to="/profile">
//                                         my profile
//                                         <i className="icon-settings list-popover-icon ml-3" />
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <a className="list-popover-item text-capitalize" href="#">
//                                         settings
//                                         <i className="icon-settings list-popover-icon ml-3" />
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="list-popover-item text-capitalize" href="#" onClick={this.logOutUser}>
//                                         logout
//                                         <i className="icon-settings list-popover-icon ml-3" />
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </PopoverBody>
//                 </Popover>
//             </>
//         );
//     }
// }
//
// const mapStateToProps = (state: StateInterface) => ({
//     logoutResponse: state.logoutResponse,
// })
//
// const mapDispatchToProps = {
//     logoutAction,
// }
//
// export default connect<any, any, any>(
//     mapStateToProps,
//     mapDispatchToProps,
// )(ProfileComponent);
