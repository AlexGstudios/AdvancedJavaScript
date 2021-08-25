import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ open, onClose, people, title}) => {
    
    const [info, setInfo] = useState([]);
    const [isFalse, setIsFalse] = useState(false);

    useEffect(() => {
        if(!open){
            setInfo([]);
            return;
        }
        const fetching = async () => {
            let i = 0;
            let list = [];
            for(i; i < people.length; i++){
                const res = await fetch(people[i]);
                const data = await res.json();
                list.push(data);
                console.log('x');
            }
            setInfo(list);
            setIsFalse(true);
        }
        fetching();
    }, [people, open]);

    let sortList = [];
    info.map((char) => sortList.push(char))
    sortList.sort((a, b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    })

    if(!open) return null;

    return ReactDOM.createPortal(
            <div>
                <div className="overlay" onClick={onClose}></div>
                <div className="Modal">
                    <h3>{title}</h3>
                    <div>
                    {isFalse ? sortList && sortList.map((char, i) => {
                        return(
                            <div key={i}>{char && char.name}</div>
                        )
                    }) : <div>Loading</div>}
                    </div>
                    <button className="btnBack" onClick={onClose}>Back</button>
                </div>
            </div>,
            document.getElementById('portal')
    );
}