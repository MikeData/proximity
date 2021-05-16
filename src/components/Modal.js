import React from 'react';
import * as lib from './uilib';

export const Modal = ({ showModal, setShowModal }) => {
    return (
    <>
    {showModal ? 
    <lib.modalbackground>
        <lib.modalwrapper showModal={showModal}>
            <lib.modalcontent>
                <h1> Title </h1>
                <p> Toma texto </p>
            </lib.modalcontent>
            
    
        </lib.modalwrapper>
    </lib.modalbackground>
     : null};
    </>
    )
}
