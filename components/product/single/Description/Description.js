import React from 'react'
import { productPrice } from '../../../../helpers/formulas/ProductFormula';
import DescriptionStyles from './description.module.css'
export default function Description({product}) {
    return (
        <>
            <div className={DescriptionStyles.namePrice}>
                <p className={DescriptionStyles.productName}>{product.product_title}</p>
                <p className={DescriptionStyles.productPrice}>
                    {`
                        ${productPrice(product.total_money_expect, product.total_items_in_stock)} 
                        ${product.product_currency}
                    `}
                </p>
            </div>
            <div className={DescriptionStyles.description}>
                <p>{product.product_description}</p>
            </div>
        </>
    )
}
