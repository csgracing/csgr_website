'use client'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import carImage from '../teams/2025season/images/carimages/car1.jpg';
import carImage2 from '../teams/2025season/images/carimages/car2.jpg';
import carImage3 from '../teams/2025season/images/carimages/car3.jpg';
import carImage4 from '../teams/2025season/images/carimages/car4.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const SponsorCarousel=()=>{
    return (
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        arrows={false}
        >
        <div className='bg-csg-dark-gray box-content rounded-lg border-csg-red size-100 border-4 p-4 flex flex-col items-center text-lg'>
            <Image src={carImage} width={300} height={300} alt=""></Image>
            hi
        </div>  
        <div className='bg-csg-dark-gray box-content rounded-lg border-csg-red size-100 border-4 p-4 flex flex-col items-center text-lg'>
            <Image src={carImage2} width={300} height={300} alt=""></Image>
        </div>  
        <div className='bg-csg-dark-gray box-content rounded-lg border-csg-red size-100 border-4 p-4 flex flex-col items-center text-lg'>
            <Image src={carImage3} width={300} height={300} alt=""></Image>
        </div>  
        <div className='bg-csg-dark-gray box-content rounded-lg border-csg-red size-100 border-4 p-4 flex flex-col items-center text-lg'>
            <Image src={carImage4} width={300} height={300} alt=""></Image>
        </div>  
        </Carousel>

    )
}
export default SponsorCarousel;