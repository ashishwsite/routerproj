import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    // userid is variable take valu from url and give access to display 
    // the acees and display only using useparam hook 
    const {userid}=useParams();
  return (
    <div  className='bg-green-100 text-center rounded-sm' >
      User : {userid}
    </div>
  )
}

export default User
