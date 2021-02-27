import useSWR from 'swr'
import { ListProductHelper } from './ListProductHelper';
import { useViewAllProduct } from '../../../containers/hooks/useProducts';
import {
  BUY_ALL_PRODUCT_MESSAGE,
  NO_PRODUCT_AVAILABLE_MESSAGE,
  PAGE_FAILED_TO_LOAD_MESSAGE,
  LOADING_MESSAGE,
} from '../../../constant/message';
import productStyle from './allProducts.module.css';
import {translateHook } from '../../../locales/translate'

export const AllProducts = () => {
  const transalte = translateHook()
  const { isLoading, isError, data } = useViewAllProduct()
  if (isError) return <div>{PAGE_FAILED_TO_LOAD_MESSAGE}</div>
  if (isLoading) return <div>{LOADING_MESSAGE}</div>
  
  return (
    <div className={productStyle.productContainer}>
      <h2 className={productStyle.storyProduct}>{transalte.whatYouSee}</h2>
      <div className={productStyle.listProducts}>
        {
          data.length === 0
            ? NO_PRODUCT_AVAILABLE_MESSAGE
            : data.map((item, index) => (
              <ListProductHelper key={index} item={item} />  
            ))
        }
      </div>
    </div>
  );
};
