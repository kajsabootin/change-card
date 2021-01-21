import React, { useState } from 'react'
import { CardOne } from './components/CardOne'
import { CardTwo } from './components/CardTwo'

export const App = () => {

  const [clicked, setClicked] = useState(false)

  const handelClicked = () => {
    setClicked(!clicked)
  }

  return (
    <div className="content">

      {!clicked &&
        <CardOne
          handelClicked={handelClicked}
        />
      }
      {clicked &&

        <CardTwo
          handelClicked={handelClicked}
        />
      }     
    </div>
  )
}
