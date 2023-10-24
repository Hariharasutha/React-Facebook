import React from 'react'
import Statuss from './Statuss'
import { ImagesList } from '../../utils'

export default function StatusList() {
  return (
    <div className='d-flex content-status cursor-pointer'>
         <Statuss 
           imgUrl={ImagesList[0].download_url}
           profileUrl={ImagesList[5].download_url}
           nameUrl="Hariharasuthan" 
         /> 
          <Statuss 
           imgUrl={ImagesList[1].download_url}
           profileUrl={ImagesList[3].download_url}
           nameUrl="Subash-" 
         />
          <Statuss 
           imgUrl={ImagesList[2].download_url}
           profileUrl={ImagesList[1].download_url}
           nameUrl="Mohan" 
         /> 
          <Statuss 
           imgUrl={ImagesList[3].download_url}
           profileUrl={ImagesList[2].download_url}
           nameUrl="Hari__" 
         />
         <Statuss 
           imgUrl={ImagesList[5].download_url}
           profileUrl={ImagesList[0].download_url}
           nameUrl="sudhan!__" 
         /> 
    
    </div>
  )
}
