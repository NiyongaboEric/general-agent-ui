import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const useViewAllProduct = () => {
  const { data, error } = useSWR('/api/products', fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
};
