import Loader from 'components/Loader'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Page500() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])

  return <Loader />
}
