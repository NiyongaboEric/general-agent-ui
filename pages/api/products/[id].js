import { LISTED_PRODUCTS } from '../../../constant/data'

export default function handler({ query: { id_no } }, res) {
  const filtered = LISTED_PRODUCTS.filter((product) => product.id === id_no)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `DEVELOPMENT ERROR___Product with the id of ${id_no} is not found` })
  }
}
