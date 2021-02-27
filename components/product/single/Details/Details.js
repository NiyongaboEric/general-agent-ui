import React from 'react'
import DetailsStyles from './details.module.css'
import {translateHook } from '../../../../locales/translate'

export default function Details({product}) {
    const transalte = translateHook()
    return (
        <>
            <p className={DetailsStyles.detailsTitle}>{transalte.details}</p>
            <div className={DetailsStyles.details}>
                <div className={DetailsStyles.detailsListContainer}>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>{transalte.remainings}</p>
                        <p>{product.items_remaining_in_stock}</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>{transalte.totalItems}</p>
                        <p>{product.total_items_in_stock}</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>{transalte.receivedPayment}</p>
                        <p>54,000 RWF</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>{transalte.totalPayment}</p>
                        <p>{product.total_money_expect} RWF</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>{transalte.deadline}</p>
                        <p>{product.product_deadline}</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>{transalte.owner}</p>
                        <p>{product.product_owner}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
