import PrimaryButton from "../buttons/primaryButton"

export default function HowItWorks(){

    const steps = [
        {
            stepNumber: '01',
            stepTitle: 'Pick your coffee',
            stepInfo: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        },
        {
            stepNumber: '02',
            stepTitle: 'Choose the frequency',
            stepInfo: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
        },
        {
            stepNumber: '03',
            stepTitle: 'Recieve and enjoy!',
            stepInfo: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
        }


    ]
    return(
        <section className="mt-[730px] sm:mt-[450px] lg:mt-[300px] lg:px-[2%] xl:px-[7%]">
            
            <h4 className="text-center md:text-start text-[1.5em] fraunces-bold text-[#83888F]">How it works</h4>

            <svg className="hidden md:flex md:max-w-[550px] lg:max-w-[78%] xl:max-w-[800px] 2xl:max-w-[790px] 2xl:min-w-[790px] my-[45px]" viewBox="0 0 497 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 16H481" stroke="#FDD6BA" strokeWidth="2" />
                <circle cx="15.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" strokeWidth="2" />
                <circle cx="248.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" strokeWidth="2" />
                <circle cx="481.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" strokeWidth="2" />
            </svg>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-[68px] md:gap-x-[30px] lg:gap-[95px] mt-[85px]">
                {steps.map(step => (
                    <div key={step.stepNumber} className="text-center md:text-start flex flex-col items-center md:items-start  gap-y-[40px]">

                        <span className="fraunces-bold text-[#FDD6BA] text-[4.5em]">
                            {step.stepNumber}
                        </span>

                        <h5 className="fraunces-bold text-[1.75em] text-[#333D4B] text-center md:text-start leading-[35px] md:max-w-[223px]">
                            {step.stepTitle}
                        </h5>

                        <p className="text-[15px] text-[#333D4B] max-w-[327px] md:max-w-[223px] lg:max-w-[260px] text-center md:text-start">
                            {step.stepInfo}
                        </p>

                    </div>
                ))}
            </div>

            <div className="flex justify-center md:justify-start mt-[55px]">
                <div className="w-[217px]">
                    <a href="/create-your-plan">
                        <PrimaryButton
                            text={'Create your plan'}
                            href={''}
                        />
                    </a>
                </div>
            </div>

        </section>
    )
}

