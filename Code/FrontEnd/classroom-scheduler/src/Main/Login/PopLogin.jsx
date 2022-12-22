import React, { useState } from "react";
import CModal from "./CModal"

const PopLogin=({closeModal})=>{

    return(
        <>
        <div>
            <CModal closeCModal={closeModal} />
        </div>
        </>
    )
}

export default PopLogin;