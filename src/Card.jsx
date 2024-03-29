import image from './assets/img/cactus_img.jpg'

console.log(image);

export const Card = () => {
  return (
    <>
      <div className="w-1/3 mx-auto">
        <div className="flex flex-col justify-center h-screen ">
          <div className="bg-blanco rounded-xl p-4 shadow-lg">
            <img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1709742869/Challenge-dev/cactus_img_g1ipco.jpg" 
                  alt="card-image"
                  className="rounded-xl object-cover h-2/4 w-full" 
            />
            <button className='bg-rosa text-morado text-[10px] rounded-xl px-4 p-1 mt-4 mb-4 font-medium font-sans'>Design</button>
            <h2 className="text-negro text-[18px] font-semibold font-sans">Embracing Minimalism</h2>
            <p className='text-gris text-[14px] mt-2 font-light'>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
            <hr className='text-gris mt-4'/>
            <p className='text-gris text-[12px] mt-4 mb-16 font-light'>Annie Spratt</p>
          </div>
        </div>
      </div>
    </>
  )
}
