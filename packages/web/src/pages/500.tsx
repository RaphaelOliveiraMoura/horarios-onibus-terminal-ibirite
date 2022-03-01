import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { Loader } from 'components'

export default function Page500() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])

  return <Loader />
}
