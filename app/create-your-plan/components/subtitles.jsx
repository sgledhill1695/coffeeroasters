import { useEffect, useState } from "react";

export default function Subtitles({questions, setQuestions}){

    const [subtitleFixed, setSubtitleFixed] = useState(false);

    //Track which subtitle to highlight
    useEffect(() => {

        let accordion0 = document.getElementById(`accordion-pannel-0`);
        let accordion1 = document.getElementById(`accordion-pannel-1`);
        let accordion2 = document.getElementById(`accordion-pannel-2`);
        let accordion3 = document.getElementById(`accordion-pannel-3`);
        let accordion4 = document.getElementById(`accordion-pannel-4`);

        let options = {
            rootMargin: "0px 0px 0px 0px",
            threshold: 1.0,
        };

        let observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const id = entry.target.id.charAt(entry.target.id.length - 1);
                    const idInt = parseInt(id);

                    const updatedQuestions = questions.map((q, index) => {
                        if(idInt === index){
                            q.inView = true;
                        } else {
                            q.inView = false;
                        };
                        return q;
                    });

                    setQuestions(updatedQuestions);

                };
            });

        }, options);

        observer.observe(accordion0);
        observer.observe(accordion1);
        observer.observe(accordion2);
        observer.observe(accordion3);
        observer.observe(accordion4);

        }, []);

    //Control when to fix subtitles to the screen
    useEffect(() => {

        const subtitles = document.querySelector('#subtitles');
        const sectionTop = document.querySelector('#sectionTop');

        const handleScroll = () => {
            const topPosition = subtitles.getBoundingClientRect().top;
            if (topPosition < 50) {
                subtitles.classList.add('sticky');
                subtitles.classList.add('top-20');
                setSubtitleFixed(true);
            }
        };

        const handleScrollWhenFixed = () => {
            const sectionContainer = sectionTop.getBoundingClientRect().top;
            if (sectionContainer > 75) {
                subtitles.classList.remove('fixed');
                subtitles.classList.remove('top-20');
                subtitles.classList.remove('gap-20');
                setSubtitleFixed(false);
            }
        };

        if(!subtitleFixed){
            window.addEventListener('scroll', handleScroll);
        };

        if(subtitleFixed){
            window.addEventListener('scroll', handleScrollWhenFixed);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollWhenFixed);

        };

    }, [subtitleFixed]);

    return(
        <ul className="hidden xl:flex flex-col gap-[5px]" id="subtitles">
            {questions.map((q, index)=> (
                <li className={`${index > 0 && 'border-t-[1px] border-[#83888f67] pt-[15px]'}  fraunces-bold text-[24px] mb-[15px]`}>
                    <span className={`  ${q.answered ? 'text-[#0e878576]' : 'text-[#333d4b74]'} me-[15px]`}>
                        0{index + 1}
                    </span>
                    <a href={`#${q.subtitle}`} className={`${q.inView ? 'text-[#333d4b] hover:text-[#333d4bb0]' : 'text-[#333d4b74] hover:text-[#333d4bb0]'}   hover:cursor-pointer`}>
                        {q.subtitle}
                    </a>
                </li>
            ))}
        </ul>
    )
}