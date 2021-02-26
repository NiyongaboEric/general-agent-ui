import React from 'react'
import styles from '../../../components/product/single/single.module.css'
import Topbar from '../../../components/product/single/Topbar/Topbar'
import ImagesContainer from '../../../components/product/single/ImagesContainer/Images'
import Description from '../../../components/product/single/Description/Description'
import Details from '../../../components/product/single/Details/Details'
import PickupInfo from '../../../components/footer/PickupInfo/PickupInfo'
import { Header } from '../../../components/headers/Header';
import { useViewProduct } from '../../../containers/hooks/useProducts';
import {useRouter} from 'next/router'

export default function details() {
  const router = useRouter()
  const {id} = router.query

  const { isLoading, isError, data } = useViewProduct(id)
  if (isError) return <div>THERE IS AN ERRO:____{isError}</div>
  if (isLoading) return <div>LOADING_______{isLoading}</div>
  
  if(data){
    return (
      <>
        <Header />
        <div className={styles.container}>
            <Topbar />
            <ImagesContainer product={data}/>

            <div className={styles.productDetails}>

                <Description product={data}/>

                    <Details product={data}/>

                <PickupInfo />
            </div>

        </div>
        </>
    )
}
}


// export const getStaticProps = async (context) => {
//     const res = await fetch(`${server}/api/products/${context.params.id}`)
  
//     const product = await res.json()
  
//     return {
//       props: {
//         product,
//       },
//     }
//   }
  
//   export const getStaticPaths = async () => {
//     const res = await fetch(`${server}/api/products`)
  
//     const products = await res.json()
//     const ids = products.map((product) => product.id_no)
//     const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
//     return {
//       paths,
//       fallback: false,
//     }
//   }
