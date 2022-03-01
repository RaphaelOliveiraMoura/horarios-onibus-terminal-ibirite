import { Loader } from 'components'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Page404() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])

  return <Loader />
}
