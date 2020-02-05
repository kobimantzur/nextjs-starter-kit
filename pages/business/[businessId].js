import Link from 'next/link'
import { useRouter } from 'next/router'
import BusinessPage from '../../src/containers/BusinessPage';

function Business() {
  const router = useRouter()

  const { businessId } = router.query

  return (
    <div>
      asdsad
      <BusinessPage  />
    </div>
   
  )
}

export default Business