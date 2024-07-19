import React,{ Fragment, useEffect, useState } from 'react'
import  ReactDOM  from 'react-dom'
import Backdrop from '../Layout/backdrop/Backdrop'
import './Modal.css'

const ModalOverLay = (props:any) => {  
    return (
        <div className={`modal open_modal`} >
            {props.children}
        </div>
    )
}

const portalElement:any = document.getElementById('overlays');

const Modal = (props:any) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>,portalElement)}
            {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElement)}
        </Fragment>
    )
}

export default Modal