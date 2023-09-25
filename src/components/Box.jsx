import React from "react";
import '../css/Box.css';

export default function Box() {
    return (
        <div className={`Box ` + (props.classes || '')}>
            {props.children}
        </div>
    );
}