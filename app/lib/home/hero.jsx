import PrimaryButton from "../buttons/primaryButton";

export default function Hero(){

    return(
        <section>
            <div className="bg-[url('/assets/home/mobile/image-hero-coffeepress.jpg')] sm:bg-[url('/assets/home/tablet/image-hero-coffeepress.jpg')] lg:bg-[url('/assets/home/desktop/image-hero-coffeepress.jpg')] bg-cover bg-top bg-no-repeat h-[500px] lg:h-[600px] rounded-[10px] mt-[40px]">

                <div className="flex flex-col items-center sm:items-start gap-[25px] sm:px-[55px] lg:px-[80px]">

                    <h1 className="text-[white] mt-[80px] sm:mt-[100px] lg:mt-[140px] text-[2.5em] sm:text-[3em] lg:text-[4.5em] fraunces-bold leading-[45px] lg:leading-[70px] text-center sm:text-start max-w-[300px] sm:max-w-[330px] lg:max-w-[495px]">
                        Great coffee made simple.
                    </h1>

                    <p className="text-[#FEFCF7] text-center sm:text-start text-[1em] lg:text-[16px] max-w-[300px] sm:max-w-[400px]">
                        Start your mornings with the world’s best coffees. Try our expertly curated artisan
                        coffees from our best roasters delivered directly to your door, at your schedule.
                    </p>

                    <div className="w-[220px] mt-[10px]">
                        <PrimaryButton
                            text={'Create your plan'}
                        />
                    </div>


                </div>



            </div>
        </section>
    )
}