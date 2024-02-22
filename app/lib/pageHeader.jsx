export default function PageHeader({image, title, text}){

    return (
        <section>
            
            <div className={`bg-[url('/assets/about/mobile/image-hero-whitecup.jpg')] sm:bg-[url('/assets/about/tablet/image-hero-whitecup.jpg')] lg:bg-[url('/assets/about/desktop/image-hero-whitecup.jpg')] bg-no-repeat bg-cover bg-center h-[400px] lg:h-[450px] mt-[40px] rounded-[10px] flex flex-col items-center sm:items-start justify-center px-[28px] sm:px-[57px] lg:px-[80px] gap-[25px] sm:gap-[40px] text-center sm:text-start`}>

                <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] fraunces-bold text-[white] ">
                    {title}
                </h1>
                
                <p className="text-[white] max-w-[279px] sm:max-w-[420px]">
                    {text}
                </p>

            </div>
        </section>
    )
}