import { LISTED_PRODUCTS } from '../../../constant/data'
export default (req, res) => {
  const statusCodeSuccess = 200;
  const statusCodeNotfound = 404;
  const { id, path } = req.query;
  console.log('##___________IS VALID_____',id, "++++++TYPE OF____", typeof id, path)
  const isValidId = Number(id);
  // console.log('##___________IS VALID_____',isNaN( isValidId))
  if (isNaN(isValidId) || parseInt(id) === 0 ||
  ( (typeof id).toString() === 'undefined') || (typeof id === null )|| 
   (typeof parseInt(id) === 'undefined') ||( id === "undefined")
   
   ) {
    console.log("###_____1____If_______", isValidId)
    return res
    .status(statusCodeNotfound)
    .json(
      {
        message: `OOPs! Product with the id of ${id} is not valid.`,
      }
    )
  }else{
    console.log("###____2_____ELSE_______", isValidId)
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
