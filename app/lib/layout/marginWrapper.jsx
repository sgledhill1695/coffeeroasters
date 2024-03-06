export default function MarginWrapper({children}){

    return(
        <div className="mx-[4%] sm:mx-[6%] lg:px-[80px] lg:mx-auto max-w-[1440px] m-auto">
            {children}
        </div>
    )
}