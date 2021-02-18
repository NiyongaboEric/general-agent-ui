import React from 'react'
import DescriptionStyles from './description.module.css'
import { useViewProduct } from '../../../../containers/hooks/useProducts';
import {useRouter} from 'next/router'
export default function Description({product}) {
    // const router = useRouter()
    // const {id} = router.query
    // console.log("@___1__DATA_____", id)
  
    // const { isLoading, isError, data } = useViewProduct(id)
    // console.log("+++++++DESCRIPTION___DATA)____", product.product_title)
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
