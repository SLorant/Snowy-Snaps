import { projectStorage } from '../../../../firebase/config'

const MySnapsPreview = ({ userID }) => {
  async function listImages(userID) {
    try {
      const storageRef = projectStorage.ref(`${userID}/uploadedpics`)
      const result = await storageRef.listAll()
      let i = 1
      result.items.forEach((imageRef) => {
        const img = document.getElementById(`myimg${i}`)
        displayImage(imageRef, img)
        i++
      })
    } catch (error) {
      console.log(`Can't load images`)
    }
  }

  async function displayImage(imageRef, img) {
    try {
      const url = await imageRef.getDownloadURL()
      img.setAttribute('src', url)
    } catch (error) {
      // Handle any errors
    }
  }
  listImages(userID)

  return (
    <div className="group relative top-0 left-0 flex cursor-pointer">
      <img
        className="relative top-1 left-10 z-10 h-44 w-44 -rotate-3 rounded-md
         object-cover object-center drop-shadow-lg transition duration-500 ease-in-out group-hover:translate-y-4 group-hover:-translate-x-32
         group-hover:-rotate-12 md:h-60 md:w-60  "
        src="/assets/illustrations/placeholder.png"
        alt="pic"
        id="myimg4"
      />
      <img
        className="group-hover:-tran slate-y-2 absolute left-4 top-4 z-20 h-44 w-44 rotate-2 rounded-md object-cover  object-center drop-shadow-lg
          transition duration-500
          ease-in-out group-hover:-translate-x-10
        group-hover:-rotate-6 md:h-60 md:w-60"
        src="/assets/illustrations/placeholder.png"
        alt="pic"
        id="myimg3"
      />
      <img
        className="absolute  left-8 top-7 z-30  h-44 w-44 -rotate-2 rounded-md object-cover object-center drop-shadow-lg transition duration-500
        ease-in-out group-hover:-translate-y-4 group-hover:translate-x-4 group-hover:rotate-3 md:h-60 md:w-60"
        src="/assets/illustrations/placeholder.png"
        alt="pic"
        id="myimg2"
      />
      <img
        className="absolute left-14 top-6 z-40  h-44 w-44 rotate-1 rounded-md object-cover object-center drop-shadow-lg transition duration-500
         ease-in-out group-hover:translate-y-2 group-hover:translate-x-16
        group-hover:rotate-12 md:h-60 md:w-60"
        src="/assets/illustrations/placeholder.png"
        alt="pic"
        id="myimg1"
      />
    </div>
  )
}

export default MySnapsPreview
