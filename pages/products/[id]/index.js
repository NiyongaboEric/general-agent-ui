import React from 'react'
import PickupInfo from '../../../components/footer/PickupInfo/PickupInfo'
import { Header } from '../../../components/headers/Header'
import { SingleProduct } from '../../../components/product/single/SingleProduct'
import pickupInfoStyleys from '../../../components/product/single/single.module.css'

export default function details() {
  return (
    <>
      <Header />
      <SingleProduct />
      <div className={pickupInfoStyleys.pickupInfoDetails}>
      <PickupInfo />
      </div>
    </>
  )
}
