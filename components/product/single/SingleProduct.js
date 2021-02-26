import {useRouter} from 'next/router';
import Topbar from './Topbar/Topbar'
import ImagesContainer from './ImagesContainer/Images'
import Description from './Description/Description'
import Details from './Details/Details'
import { useViewProduct } from "../../../containers/hooks/useProducts";
import styles from './single.module.css'
export const SingleProduct = () => {
  const router = useRouter()
  const {id} = router.query
  const { isLoading, isError, data } = useViewProduct(id)
  if (isError) return <div>THERE IS AN ERRO:____{isError}</div>
  if (isLoading) return <div>LOADING_______{isLoading}</div>
  if(data){
    return (
      <>
        <div className={styles.container}>
            <Topbar />
            <ImagesContainer product={data}/>
            <div className={styles.productDetails}>
                <Description product={data}/>
                    <Details product={data}/>
            </div>
        </div>
        </>
    )
  }
};
