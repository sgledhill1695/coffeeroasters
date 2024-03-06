export default function Summary({questions, formComplete}){

    return(
        <div className={`${!formComplete ? 'hidden' : ''} bg-[#2C343E] rounded-[10px]  mt-[115px] px-[25px] sm:px-[45px] lg:px-[60px] py-[35px]`}>
            <h6 className="text-[16px] text-[#ffffff7a]">
                ORDER SUMMARY

                <p className="text-[white] fraunces-bold text-[24px] leading-[40px] mt-[25px] sm:mt-[15px] sm:">
                    "I drink my coffee as <span className="text-[#0E8784]">
                        {questions[0].answers.map(a => {
                            if(a.active){
                                return (
                                    <>
                                        {a.answer}
                                    </>
                                )
                            }
                        }) } 
                    </span> with a <span className="text-[#0E8784]">
                        {questions[1].answers.map(a => {
                            if (a.active) {
                                return (
                                    <>
                                        {a.answer}
                                    </>
                                )
                            }
                        })}</span> type of bean. <span className="text-[#0E8784]">
                        {questions[2].answers.map(a => {
                            if (a.active) {
                                return (
                                    <>
                                        {a.answer}
                                    </>
                                )
                            }
                        })}</span> ground ala <span className="text-[#0E8784]">
                        {questions[3].answers.map(a => {
                            if (a.active) {
                                return (
                                    <>
                                        {a.answer}
                                    </>
                                )
                            }
                        })}</span> sent to me <span className="text-[#0E8784]">
                        {questions[4].answers.map(a => {
                            if (a.active) {
                                return (
                                    <>
                                        {a.answer}
                                    </>
                                )
                            }
                        })}</span>."
                </p>
            </h6>
        </div>
    )
}