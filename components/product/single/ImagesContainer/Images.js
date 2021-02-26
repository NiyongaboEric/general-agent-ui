import React, {useState} from 'react'
import ImagesStyles from './images.module.css'
import Image from 'next/image';

const ImagesContainer = ({product}) => {
    const [currentImage, setCurrentImage] = useState(product.product_images[0].image_one)
    return (
        <div className={ImagesStyles.imagesSection}>
        <div className={ImagesStyles.mainImageContainer}>
            {/* <img src={currentImage} className={ImagesStyles.mainImage} /> */}
            <Image
              src={currentImage}
              width={650}
              height={430}
              alt={product.product_title}
            />
        </div>

        <div className={ImagesStyles.otherImagesContainer}>
            
            {/* <img onClick={()=>setCurrentImage(product.product_images[0].image_one)}  src={product.product_images[0].image_one} className={ImagesStyles.otherImage1} />
            <img onClick={()=>setCurrentImage(product.product_images[0].image_two)}  src={product.product_images[0].image_two} className={ImagesStyles.otherImage} />
            <img onClick={()=>setCurrentImage(product.product_images[0].image_three)} src={product.product_images[0].image_three} className={ImagesStyles.otherImage} /> */}
         <div>
            <Image
            onMouseOver={()=>setCurrentImage(product.product_images[0].image_one)}
              src={product.product_images[0].image_one}
              width={200}
              height={140}
              alt={product.product_title}
            />
         </div>
         <div>
            <Image
            onMouseOver={()=>setCurrentImage(product.product_images[0].image_two)}
              src={product.product_images[0].image_two}
              width={200}
              height={140}
              alt={product.product_title}
            />
         </div>
         <div>
            <Image
            onMouseOver={()=>setCurrentImage(product.product_images[0].image_three)}
              src={product.product_images[0].image_three}
              width={200}
              height={140}
              alt={product.product_title}
            />
         </div>

        </div>
    </div>
    )
}

export default ImagesContainer
