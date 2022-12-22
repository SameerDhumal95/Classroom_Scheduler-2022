import React from "react";
import "./CModal.css"

const CModal = ({closeCModal}) => {
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
            <button onClick={()=>closeCModal(false)}>X</button>
            </div>
          <div className="title">
            <h1>Are you sur you want to continue?</h1>
          </div>
          <div className="body">
            <p>The nest page is awesome! You should move forward, you will enjoy it.</p>
          </div>
          <div className="footer">
            <button onClick={()=>closeCModal(false)}>Cancel</button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CModal;
