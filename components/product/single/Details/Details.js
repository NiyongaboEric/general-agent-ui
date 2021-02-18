import React from 'react'
import DetailsStyles from './details.module.css'

export default function Details({product}) {
    return (
        <>
            <p className={DetailsStyles.detailsTitle}>Details</p>
            <div className={DetailsStyles.details}>
                <div className={DetailsStyles.detailsListContainer}>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>Items  remaining in stock</p>
                        <p>{product.items_remaining_in_stock}</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>Total items in stock</p>
                        <p>{product.total_items_in_stock}</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>Total payment received</p>
                        <p>54,000 RWF</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>Total payment expected</p>
                        <p>{product.total_money_expect} RWF</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>Deadline</p>
                        <p>{product.product_deadline}</p>
                    </div>
                    <div className={DetailsStyles.detailsList}>
                        <p className={DetailsStyles.detailOption}>Owner</p>
                        <p>{product.product_owner}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
