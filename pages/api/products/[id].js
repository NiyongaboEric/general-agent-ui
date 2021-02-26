import { LISTED_PRODUCTS } from '../../../constant/data'
export default (req, res) => {
  const statusCodeSuccess = 200;
  const statusCodeNotfound = 404;
  const { id } = req.query;
  const isValidId = parseInt(id);
  if (!isValidId) {
    return res
    .status(statusCodeNotfound)
    .json(
      {
        message: `OOPs! Product with the id of ${id} is not valid.`,
      }
    )
  }
  const result = LISTED_PRODUCTS.find((product) => product.id_no === isValidId)
  if (!result) {
    res
    .status(statusCodeNotfound)
    .json(
      { 
        message: `OOPs! Product with the id of ${id} is not found.`
      }
    )    
  } else {
    return res.status(statusCodeSuccess).json(result);
  }
}
