import React from 'react'
import Menuu from './reusable/Menuu'
import StatusList from './reusable/StatusList'
import CreatePost from './reusable/CreatePost'
import Post from './reusable/Post'
import Post1 from './reusable/Post1'

function Content() {
  return (
    <div className='d-flex pt-4 ms-3'>
        <Menuu />
        <div className="p-20">
        <StatusList />
        <CreatePost />
        <Post message ='team pic' image ='https://img.freepik.com/free-photo/strength-people-hands-success-meeting_1150-1690.jpg?size=626&ext=jpg&uid=R114558677&ga=GA1.1.302970376.1693332036&semt=sph' username ='Hariharasuthan' date ='24/425/25' />
        <Post1 message ='Today pic' image ='https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15872.jpg?size=626&ext=jpg&uid=R114558677&ga=GA1.1.302970376.1693332036&semt=sph' username ='Hariharasuthan' date ='32/126/15' />
        </div> 
    </div>

  )
}

export default Content