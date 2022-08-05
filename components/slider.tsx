import React from "react"
import { Fade, Zoom } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import styles from "../styles/Slider.module.css"

const slider = () => {
  

        const images = ["images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
        "images/image4.jpg",
        "images/image5.jpg",]

        const fadeProperties = {
            indicators: true,
            // scale: 1.2,
            duration: 5000,
            transitionDuration: 500,
            infinite: true
        }

        prevArrow:(
            <div className={styles.prevArror}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#2e2e2e">
                    <path d="M242 180.6v-138l0 2561242 213.4V331.2h270v180.6z"/>
                </svg>
            </div>
        )

        nextArrow:(
            <div className={styles.nextArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#2e2e2e">
                    <path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/>
                </svg>
            </div>
        )

        return (
            <div className={styles.image_container}>
                <h1 className={styles.slideshow_header}>Slider</h1>
                <Fade {...fadeProperties}>
                    {images.map((each,index) =>(
                        <div key={index} className={styles.image_wrapper}>
                            <img src={each} className={styles.images}/>

                        </div>
                    ))}

                </Fade>
            </div>
        )



}

export default slider