'use client'
import useSWR from 'swr'

 
async function getRequest(url: string) {
  return fetch(url, {
    method: 'GET',
  }).then(res => res.json())
}

const TenantComponent = () => {
  const { data, error, isLoading } = useSWR('/backend/say/whoami(message=\'Bram\')', getRequest)
  
    return(<span className='font-bold text-lg'>{data?.value}</span>);
}

export default TenantComponent;