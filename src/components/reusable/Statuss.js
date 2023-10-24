import React from 'react'

export default function Statuss(props) {
  return (
    <div className='status'>
        <img src={props.imgUrl} width={200} height={350} className='br-20' alt='status-background'/>
        <img src={props.profileUrl} width={45} height={45} className='status-profile' alt='status-profile'/>
        <div className="name"><b>{props.nameUrl}</b></div>
    </div>
  )
}
