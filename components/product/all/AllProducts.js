import { ListProductHelper } from './ListProductHelper';
import {
  BUY_ALL_PRODUCT_MESSAGE,
  NO_PRODUCT_AVAILABLE_MESSAGE,
} from '../../../constant/message';
import productStyle from './allProducts.module.css';

export const AllProducts = (props) => {
  const { allProductsData } = props;
  return (
    <div className={productStyle.productContainer}>
      <h2 className={productStyle.storyProduct}>{BUY_ALL_PRODUCT_MESSAGE}</h2>
      <div className={productStyle.listProducts}>
        {
          allProductsData.length === 0
            ? NO_PRODUCT_AVAILABLE_MESSAGE
            : allProductsData.map((item, index) => (
              <ListProductHelper key={index} item={item} />  
            ))
        }
      </div>
    </div>
  );
};
