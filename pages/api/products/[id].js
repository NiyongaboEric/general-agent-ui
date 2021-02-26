import { LISTED_PRODUCTS } from '../../../constant/data'
export default (req, res) => {
  const statusCodeSuccess = 200;
  const statusCodeNotfound = 404;
  const { id } = req.query;
  const isValidId = Number(id);

  if (isNaN(isValidId)) {
    return res
    .status(statusCodeNotfound)
    .json(
      {
        message: `OOPs! Product with the id of ${id} is not valid.`,
      }
    )
  }else{
    const result = LISTED_PRODUCTS.find((product) => product.id_no === parseInt(id))
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
  }
