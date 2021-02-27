import React from 'react'
import Link from 'next/link'
import { CODE } from '../../../../constant/message';
import TopbarStyles from './topbar.module.css'
import {translateHook } from '../../../../locales/translate'

const Topbar = () =>{
    const transalte = translateHook()
    return (
        <div className={TopbarStyles.topBlue}>
        <div className={TopbarStyles.backIcon}>
            <Link href="/">
            <img src="/assets/images/backIcon.png" />
            </Link>
        </div>

        <div className={TopbarStyles.paymentOption}>
            <p className={TopbarStyles.dial}>{transalte.payByDialing}</p>
            <p className={TopbarStyles.code}>{CODE}</p>
        </div>
    </div>
    )
}

export default Topbar
