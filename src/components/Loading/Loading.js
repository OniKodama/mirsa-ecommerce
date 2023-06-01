import React from 'react'
import './Loading.scss'

const Loading = () => {
  return (
    <div className='loading'>
      <h1>Loading...</h1>
        <div className='spinner-box'>
            <div className='circle-box'>
                <div className='circle-core'></div>
            </div>
        </div>
    </div>
  )
}

export default Loading