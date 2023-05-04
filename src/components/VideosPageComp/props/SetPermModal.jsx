import React from 'react'
import cross from '../../../assets/Svg/cross.svg'

export default function SetPermModal(props) {
    return (
        <>
            <div className={props.padding}>
                <div className={`${props.position} ${props.display} ${props.align}`}>
                    <h2 className={`${props.textFont} ${props.fontType}`}>{props.title}</h2>
                    <img src={props.src} className={`${props.absposition} ${props.rightpos} ${props.width} ${props.height}
                    ${props.cursor}`}></img>
                </div>
            </div>
        </>
    )
}
