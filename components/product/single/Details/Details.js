import React from 'react'
import DetailsStyles from './details.module.css'
import { 
DETAILS, 
ITEMS_REMAINING_IN_STOCK_MESSAGE, 
TOTAL_ITEMS_IN_STOCK,
TOTAL_PAYMENT_RECEIVED,
TOTAL_PAYMENT_EXPECTED,
DEADLINE,
OWNER
} from '../../../../constant/message'

export default function Details({product}) {
    return (
        <>
            <p className={DetailsStyles.detailsTitle}>{DETAILS}</p>
            <div className={DetailsStyles.details}>
                <div className={DetailsStyles.detailsListContainer}>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>{ITEMS_REMAINING_IN_STOCK_MESSAGE}</p>
                        <p>{product.items_remaining_in_stock}</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>{TOTAL_ITEMS_IN_STOCK}</p>
                        <p>{product.total_items_in_stock}</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>{TOTAL_PAYMENT_RECEIVED}</p>
                        <p>54,000 RWF</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>{TOTAL_PAYMENT_EXPECTED}</p>
                        <p>{product.total_money_expect} RWF</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>{DEADLINE}</p>
                        <p>{product.product_deadline}</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>{OWNER}</p>
                        <p>{product.product_owner}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
