import { useRouter } from 'next/router';
import Topbar from './Topbar/Topbar'
import ImagesContainer from './ImagesContainer/Images'
import Description from './Description/Description'
import Details from './Details/Details'
import { useViewProduct } from "../../../containers/hooks/useProducts";
import styles from './single.module.css'
export const SingleProduct = () => {
  const { query } = useRouter()
  const { id } = query
  const { isLoading, isError, data, } = useViewProduct(id)
  if (isError) {
    return <div>{isError.info.message}</div>
  }
  if (isLoading) return <div>isLoading</div>
  return (
    <>
      <div className={styles.container}>
        <Topbar data={data}/>
        <ImagesContainer product={data} />
        <div className={styles.productDetails}>
          <Description product={data} />
          <Details product={data} />
        </div>
      </div>
    </>
  )
};
