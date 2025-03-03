import React from 'react'
import { GridLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
<GridLoader color='#27232e' />
    </div>
  )
}

export default Loader