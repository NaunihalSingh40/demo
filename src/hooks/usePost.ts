import axios from 'axios'
import { useMutation } from 'react-query' 

interface Params {
  url: string
  payload?: any
  formData?: string
}

const post = async ({ url, payload, token }: { url: string; payload?: any; token?: string }) => {
  let headers: any
  if (token) {
    headers = { 'Access-Token': `Bearer ${token}` }
  }

  const { data } = await axios.post(url, payload, { headers })
  return data
}

const usePost = () => {

  return useMutation(({ url, payload }: Params) => post({ url, payload}))
}

export default usePost