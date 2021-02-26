import React from 'react'
import DescriptionStyles from './description.module.css'
export default function Description({product}) {
    return (
        <>
            <div className={DescriptionStyles.namePrice}>
                <p className={DescriptionStyles.productName}>{product.product_title}</p>
                <p className={DescriptionStyles.productPrice}>80,000RWF</p>
            </div>

            <div className={DescriptionStyles.description}>
                <p>{product.product_description}</p>
            </div>
        </>
    )
}
