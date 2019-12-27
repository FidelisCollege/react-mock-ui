import * as React from 'react';
import DocumentUploadComponent from "./uploadDocumentComponent";
import UploadedDocumentComponent from "./uploadedDocumentComponent";
import DocumentWeblinkComponent from "./uploadWeblinkComponent";




const ResourcesDocumentWeblink = () => {
    return (
        <>
            <DocumentWeblinkComponent/>
            <UploadedDocumentComponent/>
        </>

    );
}

export default  ResourcesDocumentWeblink;
