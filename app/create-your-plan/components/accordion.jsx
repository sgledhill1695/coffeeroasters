export default function Accordions({ questions, setQuestions, formComplete }){

    const handleOpen = (key, index) => {

        const updatedQuestions = questions.map(q => {

            if(q.question === key){
                if(q.open){
                    q.open = false;
                    const accordion = document.getElementById(`accordion${index}`);
                    accordion.classList.remove('accordion-open');
                    accordion.classList.add('accordion-close');
                    return q;
                } else {
                    q.open = true;
                    const accordion = document.getElementById(`accordion${index}`);
                    accordion.classList.remove('accordion-close');
                    accordion.classList.add('accordion-open');
                    return q;
                }
            } else {
                return q;
            }
        });

        setQuestions(updatedQuestions);

    };

    const handleSelect = (a, itemIndex) => {

        const updatedQuestions = questions.map(q => {
            if(q.question === a.question){
                q.answered = true;
                q.answers.map((a, index) => {
                    if(index === itemIndex){
                        a.active = true;
                        return a;
                    } else {
                        a.active = false;
                        return a;
                    }
                })
                return q;
            } else {
                return q;
            }
        });

        setQuestions(updatedQuestions);

    };

    return(
        <div className="flex flex-col gap-[120px]" id="sectionTop">
            {questions.map((q, index) => (
                <div id={q.subtitle}  key={q.question} className={`w-full text-start`}>

                    <div id={`accordion${index}`} onClick={((() => handleOpen(q.question, index)))} className="flex justify-between items-center mb-[35px] hover:cursor-pointer scroll-my-[70px] ">
                        <p className="fraunces-bold text-[24px] text-[#83888F] max-w-[240px] sm:max-w-[3000px]">
                            {q.question}
                        </p>
                        <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3629 11.9238L18.1913 9.0954L9.09566 -0.000263214L0 9.0954L2.82843 11.9238L9.09521 5.65661L15.3629 11.9238Z" fill="#0E8784" />
                        </svg>
                    </div>

                    <div id={`accordion-pannel-${index}`} className={`${q.open ? '' : 'hidden'}`}>
                        {index < 4 ? (
                            <>
                                <a href={`#accordion${index + 1}`}>
                                    <div className="grid grid-cols-1 gap-[15px]">
                                        {q.answers.map((a, index) => (

                                            <button id={`answer${index}`} onClick={() => (handleSelect(q, index))} key={a.answer} className={`${a.active ? 'bg-[#0E8784] text-[white]' : 'bg-[#F4F1EB] text-[#333D4B] hover:bg-[#FDD6BA]'} w-[100%] rounded-[10px] col-span-1  py-[30px] px-[25px] flex flex-col gap-[15px]   hover:cursor-pointer text-start`}>
                                                <p className="text-[24px] fraunces-bold">
                                                    {a.answer}
                                                </p>
                                                <p className="text-[16px] max-w-[278px]">
                                                    {a.answerInfo}
                                                </p>
                                            </button>
                                        ))}
                                    </div>
                                </a>
                            </>
                        ) : (
                            <>
                                <a href={`#summary`}>
                                    <div className="grid grid-cols-1 gap-[15px]">
                                        {q.answers.map((a, index) => (

                                            <button id={`answer${index}`} onClick={() => (handleSelect(q, index))} key={a.answer} className={`${a.active ? 'bg-[#0E8784] text-[white]' : 'bg-[#F4F1EB] text-[#333D4B] hover:bg-[#FDD6BA]'} w-[100%] rounded-[10px] col-span-1  py-[30px] px-[25px] flex flex-col gap-[15px]   hover:cursor-pointer text-start`}>
                                                <p className="text-[24px] fraunces-bold">
                                                    {a.answer}
                                                </p>
                                                <p className="text-[16px] max-w-[278px]">
                                                    {a.answerInfo}
                                                </p>
                                            </button>
                                        ))}
                                    </div>
                                </a>
                            </>
                        )}
                    </div>

            </div>
            ))}
        </div>

    )
}