import React from "react";

export default class ModalFactura extends React.Component{
    
    render(){
        return(
            <div id="myModal" className="modal">
                <div className="modal-content">
                <span className="close">&times;</span>
                <p>Some text in the Modal..</p>
                </div>
            </div>
        );
    }
}