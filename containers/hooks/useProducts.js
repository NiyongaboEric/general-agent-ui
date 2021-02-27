import useSWR from "swr"
const fetcher = async url => {
  const res = await fetch(url)
  console.log('res fethed', res);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}
export const useViewAllProduct = () => {
  const { data, error } = useSWR('/api/products', fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
};
export const useViewProduct = (id) => {
  const { data, error } = useSWR(`/api/products/${id}`, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
};
