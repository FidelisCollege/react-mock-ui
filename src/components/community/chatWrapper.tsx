import * as React from 'react';
const ChatWrapper = () => {
    return (
        <>
            <div className="bg-md-primary position-fixed chat-wrapper px-3 py-2 rounded-top d-none d-lg-block">
                <div className="d-lg-flex align-items-center">
                    <img className="cursor-pointer chat-wrapper-img" src="images/media-img.png" alt=""/>
                    <div className="pr-3">
                        <h2 className="mb-0 text-white f-16 font-weight-normal">Christopher Puckey</h2>
                        <p className="mb-0 text-white f-13">Mentoring manager</p>
                    </div>
                    <a href="#"  className="text-capitalize chat-wrapper-btn">ask</a>
                </div>
                <a href="#" type="button" className="btn bg-primary text-white rounded px-3 py-3 text-capitalize  rounded  text-capitalize chat-wrapper d-lg-none">ask</a>
            </div>
            <div className="bg-md-primary position-fixed chat-wrapper d-lg-none">
                <div className=" text-white d-md-none f-14 font-weight-normal">ask</div>
            </div>

        </>


    );
}


export default  ChatWrapper;