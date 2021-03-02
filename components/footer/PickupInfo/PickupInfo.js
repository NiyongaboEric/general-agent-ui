import React from 'react'
import PickupInfoStyle from './pickupInfo.module.css'

export default function PickupInfo() {
    return (
        <div className={PickupInfoStyle.pickupInfoContainer}>
        <div className={PickupInfoStyle.pickupInfo}>
            <p className={PickupInfoStyle.pickupTitle}>Pick up information</p>
            <div className={PickupInfoStyle.detailsList}>
                <p className={PickupInfoStyle.detailOption}>Venue</p>
                <p>Gasabo</p>
            </div>
            <div className={PickupInfoStyle.detailsList}>
                <p className={PickupInfoStyle.detailOption}>Street</p>
                <p>KG 24 Ave</p>
            </div>
            <div className={PickupInfoStyle.detailsList}>
                <p className={PickupInfoStyle.detailOption}>our contact</p>
                <p>+250 787533882</p>
            </div>
        </div>
    </div>
    )
}
