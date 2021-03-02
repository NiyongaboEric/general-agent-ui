import React from 'react'
import Link from 'next/link'
import { CODE, PAY_BY_DIALING_MESSAGE } from '../../../../constant/message';
import TopbarStyles from './topbar.module.css'

const Topbar = (data) => {
    return (
        <div className={TopbarStyles.topBlue}>
        <div className={TopbarStyles.backIcon}>
            <Link href="/">
            <img src="/assets/images/backIcon.png" />
            </Link>
        </div>

        <div className={TopbarStyles.paymentOption}>
            <p className={TopbarStyles.dial}>{PAY_BY_DIALING_MESSAGE}</p>
            <p className={TopbarStyles.code}>{`${CODE}${data.data.product_payment_number}#`}</p>
        </div>
    </div>
    )
}

export default Topbar
