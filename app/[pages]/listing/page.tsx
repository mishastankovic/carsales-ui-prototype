import React from 'react';
import Carousel from '@/app/components/carousel';
import ProgressSlider from '@/app/components/progress-slider';

export default function Page() {
    const images = [
        'https://img.classistatic.de/api/v1/mo-prod/images/7c/7cc88808-c6aa-43ae-9ba4-be370afdb995?rule=mo-1600.jpg&amptext=Slide+1',
        'https://img.classistatic.de/api/v1/mo-prod/images/72/727b2dcf-0b95-4e7a-96d6-f11d847f6d22?rule=mo-1600.jpg&amp;text=Slide+2',
        'https://img.classistatic.de/api/v1/mo-prod/images/f8/f84f0e36-77cd-4ce0-a01d-04130c1595ce?rule=mo-1600.jpg&amp;text=Slide+3',
        'https://img.classistatic.de/api/v1/mo-prod/images/f9/f9d378d1-e431-4f42-844a-c3a7cbe0cef2?rule=mo-1600.jpg&amp;text=Slide+4',
        'https://img.classistatic.de/api/v1/mo-prod/images/77/77d1ad14-e957-44a3-9e18-d433145fcdc2?rule=mo-1600.jpg&amp;text=Slide+5',
        'https://img.classistatic.de/api/v1/mo-prod/images/b5/b535a1ca-64ca-47df-bb9e-097209797aae?rule=mo-1600.jpg&amp;text=Slide+6',
        'https://img.classistatic.de/api/v1/mo-prod/images/d3/d32188b0-919f-4996-bd86-d38550881513?rule=mo-1600.jpg&amp;text=Slide+7',
        'https://img.classistatic.de/api/v1/mo-prod/images/62/62b26a08-235b-4f8b-808f-fbd12bc4ae06?rule=mo-1600.jpg&amp;text=Slide+8',
        'https://img.classistatic.de/api/v1/mo-prod/images/e3/e34ddb57-d927-42f3-ad49-d59360b55a62?rule=mo-1600.jpg&amp;text=Slide+9',
        'https://img.classistatic.de/api/v1/mo-prod/images/24/243b804f-849d-42df-a796-a61501bb9240?rule=mo-1600.jpg&amp;text=Slide+10',
        'https://img.classistatic.de/api/v1/mo-prod/images/4c/4cc209c8-96dc-4712-97ea-3e1d6f1e215b?rule=mo-1600.jpg&amp;text=Slide+11',
        'https://img.classistatic.de/api/v1/mo-prod/images/4b/4b78c68f-d5dd-4642-9316-5bd356cd9009?rule=mo-1600.jpg&amp;text=Slide+12',
    ];

    /*  
    "https://carsales.pxcrush.net/carsales/car/cil/j4lz5erdnkjdb7zt4kfsmn9cb.jpg?pxc_width=320&amp;pxc_height=213&amp;pxc_method=crop&amp;pxc_format=auto" 
    "https://carsales.pxcrush.net/carsales/car/cil/got1ij607gdsmasigrbzgy5od.jpg?pxc_width=320&amp;pxc_height=213&amp;pxc_method=crop&amp;pxc_format=auto" 
    "https://resource.csnstatic.com/retail/merlin/retail-merlin-homepage/images/carsales/QR_download_app_cta.png" 
    "https://resource.csnstatic.com/retail/merlin/retail-merlin-homepage/images/AppStoreDownload.svg" 
    "https://resource.csnstatic.com/retail/merlin/retail-merlin-homepage/images/GooglePlayDownload.svg" 
    */

    return (
        <div className="flex justify-left items-start bg-gray-100 rounded-lg">
            <Carousel images={images} gallerySize={8} height={'h-[17rem] md:h-[32rem]'}/>
        </div>
    );
};
