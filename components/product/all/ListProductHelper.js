import Image from 'next/image';
import Link from 'next/link';
import { ProgressBar } from '../../shared/progressBar/ProgressBar';
import { CountdownTimer } from '../../shared/timer/CountdownTimer';
import {
  PROJECT_COLOUR_MESSAGE,
  ITEMS_REMAINING_IN_STOCK_MESSAGE,
  TOTAL_PAYMENT_REMAINING_MESSAGE,
  PRICE_MESSAGE,
} from '../../../constant/message';
import {
  productPrice,
  totalPaymentRemaining,
  totalPaymentReceived,
  progressBarStatus,
} from '../../../helpers/formulas/ProductFormula';
import productStyle from './allProducts.module.css';
import {translateHook} from '../../../locales/translate'

const DetailsInfo = (props) => {
  const { label, value } = props;
  return (
    <div className={productStyle.details}>
      <span className={productStyle.detailsLabel}>{label}</span>
      <span className={productStyle.detailsValue}>{value}</span>
    </div>
  );
};

export const ListProductHelper = (props) => {
  const translate = translateHook()
  const { item } = props;
  return (
    <Link href={`/products/${item.id_no}`}>
      <a>
        <div className={productStyle.oneProduct}>
          <section className={productStyle.topSection}>
            <h2 className={productStyle.productTitle}>{item.product_title}</h2>
            <Image
              src={item.product_images[0].image_one}
              width={300}
              height={220}
              alt={item.product_title}
            />
          </section>
          <section className={productStyle.bottomSection}>
            <h2 className={productStyle.productOverview}>{translate.overview}</h2>
            <ProgressBar
              bgColor={PROJECT_COLOUR_MESSAGE}
              completed={
                progressBarStatus(
                  item.total_items_in_stock,
                  item.items_remaining_in_stock, 
                )
              }
            />
            <DetailsInfo
              label={translate.price}
              value={
                `${productPrice(item.total_money_expect, item.total_items_in_stock)} ${item.product_currency}`
              }
            />
            <DetailsInfo
              label={translate.remainings}
              value={item.items_remaining_in_stock}
            />
            <DetailsInfo
              label={translate.paymentRemaining}
              value={
                `${
                  totalPaymentRemaining(
                    item.total_money_expect, 
                    totalPaymentReceived(
                      item.total_items_in_stock,
                      item.items_remaining_in_stock, 
                      productPrice(
                        item.total_money_expect,
                        item.total_items_in_stock
                      )
                    )
                  )
                } ${item.product_currency}` 
              }
            />
            <CountdownTimer targetTime={item.product_deadline} />
          </section>
        </div>
      </a>
    </Link>
  );
};
