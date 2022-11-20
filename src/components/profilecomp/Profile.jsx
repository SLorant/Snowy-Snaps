import React from 'react'

const Profile = () => {
  return (
    <div className="absolute top-40 left-20 bg-green-400">
     <div className="group relative inline-block">
  <button className="dropbtn">Dropdown</button>
  <div className="hidden  min-w-20  z-100 group-hover:block">
    <a className="p-12 block" href="#">Link 1</a>
    <a className="p-12 block" href="#">Link 2</a>
    <a className="p-12 block" href="#">Link 3</a>
  </div>
</div>
    </div>
  )
}

export default Profile