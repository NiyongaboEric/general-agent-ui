import React from 'react'
import PickupInfoStyle from './pickupInfo.module.css'
import {translateHook } from '../../../locales/translate'

export default function PickupInfo() {
    const transalte = translateHook()
    return (
        <div className={PickupInfoStyle.pickupInfoContainer}>
        <div className={PickupInfoStyle.pickupInfo}>
            <p className={PickupInfoStyle.pickupTitle}>{transalte.pickupInfo}</p>
            <div className={PickupInfoStyle.detailsList}>
                <p className={PickupInfoStyle.detailOption}>{transalte.venue}</p>
                <p>Kicukiro</p>
            </div>
            <div className={PickupInfoStyle.detailsList}>
                <p className={PickupInfoStyle.detailOption}>{transalte.street}</p>
                <p>KK 30 st</p>
            </div>
            <div className={PickupInfoStyle.detailsList}>
                <p className={PickupInfoStyle.detailOption}>{transalte.contact}</p>
                <p>+250 788 888 888</p>
            </div>
        </div>
    </div>
    )
}
