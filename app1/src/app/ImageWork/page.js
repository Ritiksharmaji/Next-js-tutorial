import Image from 'next/image'
import React from 'react'
import Profile from '../../../public/next.svg';


function ImageWork() {
    console.log(`profile image Details: ${Profile}`);
  return (
    <main>
        <h2>ImageWork Page</h2>
        <Image src={Profile} alt='demo'/>
        <Image src={Profile} width={200} height={200} alt="Profile Image" />
        normal image
        {/* <img src={Profile.src} alt="Profile Image" width={200} height={200} /> */}
        <p>Image component from next/image is optimized for performance.</p>

{/* --------------------- Note ---------------------
    if use are and for that if we are using src with image link then we need to use next.config.js file
    For external images, you need to configure next.config.js and add the domain to the images array. 
    and then we can use the image link directly in the src attribute of the Image component. and we need to give the width and height of the image. */}
        <p>
        if use are and for that if we are using src with image link then we need to use next.config.js file
        For external images, you need to configure next.config.js and add the domain to the images array. 
        and then we can use the image link directly in the src attribute of the Image component. and we need to give the width and height of the image.
    </p>
        {/* <Image 
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fanimal&psig=AOvVaw3F2UrXwatiqMjzP4GNKt_E&ust=1754013253127000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjWpdr-5Y4DFQAAAAAdAAAAABAE"
        /> */}
        <Image 
        src="https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg?w=300"
        width={200}
        height={200}
        alt='demo-2'
        />

    </main>
  )
}

export default ImageWork