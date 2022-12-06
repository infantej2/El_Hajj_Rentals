import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@mui/material';

const DemoCarousel=() => {
    
        return (
            <>
            <Typography variant="h5" sx={{textAlign:'center', pt:5}}>
                We've got the means for your journey
            </Typography>
            <Carousel sx={{pb:10}}>
                <div>
                    <p className="legend">Car</p>
                    <img src="https://www.enterprise.ca/en/home/_jcr_content/root/container/container/container_1250852314/sliding_carousel/teaser_1685349612.coreimg.82.1920.png/1663084717954/mtf-nissan-altima.png" />
                </div>
                <div>
                    <p className="legend">SUV</p>
                    <img src="https://www.enterprise.ca/en/home/_jcr_content/root/container/container/container_1250852314/sliding_carousel/teaser_1983068224.coreimg.82.1920.png/1663084730284/mtf-jeep-grand-cherokee.png" />
                </div>
                <div>
                    <p className="legend">Upgraded Minivan</p>
                    <img src="https://www.enterprise.ca/en/home/_jcr_content/root/container/container/container_1250852314/sliding_carousel/teaser.coreimg.82.1920.png/1663084742040/mtf-rideshare-chrysler-townandcountry-2.png" />
                </div>
                <div>
                    <p className="legend">Cargo Van</p>
                    <img src="https://www.enterprise.ca/en/home/_jcr_content/root/container/container/container_1250852314/sliding_carousel/teaser_671932157.coreimg.82.1920.png/1663084754670/mtf-ford-cargo-van.png" />
                </div>
                <div>
                    <p className="legend">Pick-up Truck</p>
                    <img src="https://www.enterprise.ca/en/home/_jcr_content/root/container/container/container_1250852314/sliding_carousel/teaser_1243252545.coreimg.82.1920.png/1663084681620/mtf-trucks-chevy-silverado.png" />
                </div>
            </Carousel>
            </>
            
        );
    
};

export default DemoCarousel;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>