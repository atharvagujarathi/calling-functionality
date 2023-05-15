import React from 'react'

const Phone = (props) => {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-3'>{props.name}</div>
                {/* <div className='col-3'>{props.phone}</div> */}
                <a href="tel:{props.phone}">call me</a>
            </div>
        </div>
    </>
  )
}

export default Phone