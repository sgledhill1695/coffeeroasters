import Image from "next/image";
import OurCollectionTitle from "./ourCollectionTitle";

export default function OurCollection(){

    const collection =[
        {
            img: '/assets/home/desktop/image-gran-espresso.png',
            title: 'Gran Espresso',
            text: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
            alt: 'image of gran espresso coffee'
        },
        {
            img: '/assets/home/desktop/image-planalto.png',
            title: 'Planalto',
            text: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
            alt: 'image of planalto coffee'
        },
        {
            img: '/assets/home/desktop/image-piccollo.png',
            title: 'Piccollo',
            text: 'Mild and smooth blend featuring notes of toasted almond and dried cherry ',
            alt: 'image of piccollo coffee'
        },
        {
            img: '/assets/home/desktop/image-danche.png',
            title: 'Danche',
            text: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
            alt: 'image of danche coffee'
        },
    ];
    
    return(
        <section className="mt-[120px] sm:mt-[140px] lg:mt-[200px] mb-[120px] sm:mb-[140px] lg:mb-[200px] relative">

            <div className="fraunces-bold flex justify-center text-[2.5em] sm:text-[11.5vw] z-[1] sm:relative sm:top-[73px]  lg:top-[50px]">
                <OurCollectionTitle/>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-center sm:items-center gap-[80px] lg:gap-[5px]">

                {collection.map((c, index) => (
                    <div key={index} className="flex flex-col sm:flex-row lg:flex-col gap-[33px] lg:gap-[70px] items-center">
                        <Image
                            src={c.img}
                            width={500}
                            height={500}
                            alt={c.alt}
                            className="max-w-[200px] z-[2]"
                        />
                        <div className="flex flex-col gap-[33px] text-center sm:text-start lg:text-center lg:justify-between lg:items-center z-[2]">
                            <h3 className="fraunces-bold text-[1.5em] text-[#333D4B]">{c.title}</h3>
                            <p className="text-[15px] text-[#333D4B] max-w-[285px]">{c.text}</p>
                        </div>
                    </div>
                ))}

            </div>
        
        </section>
    )
}