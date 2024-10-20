import { useEffect, useState } from 'react'
import { tesloShop } from '../../api/teslo-shop'

export function RequestInfo() {
  const [info, setInfo] = useState<unknown>()

  useEffect(() => {
    tesloShop.get('/auth/private')
      .then(res => setInfo(res.data))
      .catch(() => setInfo('Error'))
  }, [])

  return (
    <>
      <h2>Information</h2>

      <pre>{JSON.stringify(info, null, 2)}</pre>
    </>
  )
}
