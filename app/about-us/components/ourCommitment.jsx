import Image from "next/image"

export default function OurCommitment(){

    return (
        <section>
            <div className="mt-[118px] flex flex-col md:flex-row items-center lg:justify-center gap-[60px]">

                <div className="md:hidden">
                    <Image
                        width={280}
                        height={470}
                        src="/assets/about/mobile/image-commitment.jpg"
                        alt="image of barista making a coffee"
                        quality={100}
                        className="rounded-[10px]"
                    />
                </div>

                <div className="hidden md:flex lg:hidden">
                    <Image
                        width={280}
                        height={470}
                        src="/assets/about/tablet/image-commitment.jpg"
                        alt="image of barista making a coffee"
                        quality={100}
                        className="rounded-[10px]"
                    />
                </div>

                <div className="hidden lg:flex">
                    <Image
                        width={445}
                        height={520}
                        src="/assets/about/desktop/image-commitment.jpg"
                        alt="image of barista making a coffee"
                        quality={100}
                        className="rounded-[10px]"
                    />
                </div>



                <div className="flex flex-col gap-[50px] items-center md:items-start relative bottom-[50]">
                    <h2 className="text-[#333D4B] text-[32px] lg:text-[40px] fraunces-bold">Our commitment</h2>
                    <p className="text-[#333D4B] text-[15px] text-center md:text-start max-w-[327px] md:max-w-[339px] lg:max-w-[538px] lg:text-[16px]">
                        We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
                    </p>
                </div>



            </div>
        </section>
    )
}