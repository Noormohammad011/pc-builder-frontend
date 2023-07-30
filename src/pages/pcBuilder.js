import { useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'

const pcBuilder = () => {
  const { data: session } = useSession()

  const { categories, userName, pcbuilder } = useSelector(
    (state) => state.pcbuilder
  )



  return (
    <div>
      <h1 className='text-center text-2xl'>Welcome, {session?.user?.name}</h1>
      {JSON.stringify(categories)}
      {JSON.stringify(userName)}
      {JSON.stringify(pcbuilder)}
    </div>
  )
}

export default pcBuilder
