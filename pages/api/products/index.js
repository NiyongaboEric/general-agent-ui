import { LISTED_PRODUCTS } from '../../../constant/data';

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(LISTED_PRODUCTS.reverse());
}
