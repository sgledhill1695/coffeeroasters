import Image from "next/image"

export default function UncompromisingQuality(){
    return (
        <section>

            <div className="relative w-[100%] bg-[url('/assets/about/desktop/bg-quality.png')] bg-cover bg-no-repeat bg-center rounded-[10px] h-[559px] sm:h-[588px] xl:h-[474px]  flex flex-col xl:flex-row items-center mt-[200px] sm:mt-[300px] sm:px-[70px] xl:px-[85px] xl:gap-[125px]">


                <div className="relative bottom-[75px] sm:hidden">
                    <Image
                        width={279}
                        height={156}
                        src="/assets/about/mobile/image-quality.jpg"
                        alt="image of cup of coffee"
                        className="rounded-[10px]"
                    />
                </div>

                <div className="relative bottom-[125px] hidden sm:flex xl:hidden">
                    <Image
                        width={573}
                        height={320}
                        src="/assets/about/tablet/image-quality.jpg"
                        alt="image of cup of coffee"
                        className="rounded-[10px]"
                    />
                </div>

                <div className="flex flex-col items-center xl:items-start">
                    <h3 className="text-[white] text-[32px] xl:text-[40px] fraunces-bold text-center lg:text-start leading-[35px] max-w-[279px] sm:max-w-[413px] xl:max-w-[800px] sm:relative sm:bottom-10 xl:bottom-0">
                        Uncompromising quality
                    </h3>

                    <p className="text-[#FEFCF7] max-w-[279px] sm:max-w-[540px] mt-[40px] text-center xl:text-start sm:relative sm:bottom-10 xl:bottom-0">
                        Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
                        consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                    </p>
                </div>

                <div className="hidden xl:flex relative bottom-[100px] shrink-0">
                    <Image
                        width={445}
                        height={474}
                        src="/assets/about/desktop/image-quality.jpg"
                        alt="image of cup of coffee"
                        className="rounded-[10px]"
                    />
                </div>


            </div>
        </section>
    )
}