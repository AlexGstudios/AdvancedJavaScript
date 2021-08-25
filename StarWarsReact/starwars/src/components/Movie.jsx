import React, { useState } from "react";
import { Modal } from "./Modal";

export const Movie = ({props}) => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <p onClick={() => {setIsOpen(true)}}>{props.title} ({props.release_date})</p>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} people={props.characters} title={props.title}></Modal>
        </div>
    )
}