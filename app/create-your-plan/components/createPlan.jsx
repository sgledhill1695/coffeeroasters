'use client'

import Accordions from "./accordion";
import Subtitles from "./subtitles";
import Summary from "./summary";
import CreateMyPlan from "./createMyPlan";
import { useEffect, useState } from 'react';

export default function CreatePlan(){

    //States
    const [questions, setQuestions] = useState([
        {
            question: 'How do you drink your coffee?',
            subtitle: 'Prefrences',
            open: true,
            answered: false,
            inView: false,
            answers: [
                {
                    answer: 'Capsule',
                    answerInfo: 'Compatible with Nespresso systems and similar brewers',
                    active: false
                },
                {
                    answer: 'Filter',
                    answerInfo: 'For pour over or drip methods like Aeropress, Chemex, and V60',
                    active: false

                },
                {
                    answer: 'Espresso',
                    answerInfo: 'Dense and finely ground beans for an intense, flavorful experience',
                    active: false
                },
            ]
        },
        {
            question: 'What type of coffee?',
            subtitle: 'Bean Type',
            open: true,
            answered: false,
            inView: false,
            answers: [
                {
                    answer: 'Single Origin',
                    answerInfo: 'Distinct, high quality coffee from a specific family-owned farm',
                    active: false
                },
                {
                    answer: 'Decaf',
                    answerInfo: 'Just like regular coffee, except the caffeine has been removed',
                    active: false

                },
                {
                    answer: 'Blended',
                    answerInfo: 'Combination of two or three dark roasted beans of organic coffees',
                    active: false
                },
            ]
        },
        {
            question: 'How much would you like?',
            subtitle: 'Quantity',
            open: true,
            answered: false,
            inView: false,
            answers: [
                {
                    answer: '250g',
                    answerInfo: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
                    active: false
                },
                {
                    answer: '500g',
                    answerInfo: 'Perfect option for a couple. Yields about 40 delectable cups.',
                    active: false

                },
                {
                    answer: '1000g',
                    answerInfo: 'Perfect for offices and events. Yields about 90 delightful cups.',
                    active: false
                },
            ]
        },
        {
            question: 'Want us to grind them?',
            subtitle: 'Grind Options',
            open: true,
            answered: false,
            inView: false,
            answers: [
                {
                    answer: 'Wholebean',
                    answerInfo: 'Best choice if you cherish the full sensory experience',
                    active: false
                },
                {
                    answer: 'Filter',
                    answerInfo: 'For drip or pour-over coffee methods such as V60 or Aeropress',
                    active: false

                },
                {
                    answer: 'Cafetiere',
                    answerInfo: 'Course ground beans specially suited for french press coffee',
                    active: false
                },
            ]
        },
        {
            question: 'How often should we deliver',
            open: true,
            subtitle: 'Deliveries',
            answered: false,
            inView: false,
            answers: [
                {
                    answer: 'Every week',
                    answerInfo: '$7.20 per shipment. Includes free first-class shipping.',
                    active: false
                },
                {
                    answer: 'Every two weeks',
                    answerInfo: '$9.60 per shipment. Includes free priority shipping.',
                    active: false

                },
                {
                    answer: 'Every month',
                    answerInfo: '$12.00 per shipment. Includes free priority shipping.',
                    active: false
                },
            ]
        }




    ]);
    const [formComplete, setFormComplete] = useState(false);

    //Track when the form is complete
    useEffect(() => {

        const complete = [];

        questions.map((q, index) => {
            if(q.answered){
                complete.push(q);
            };
        });

        if(complete.length === 5){
            setFormComplete(true);
        } else {
            setFormComplete(false);
        };
    }, [questions]);

    return (
        <section className="mt-[120px] relative">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[125px] relative">

                <div>
                    <Subtitles 
                        questions={questions}
                        setQuestions={setQuestions}
                    />
                </div>


                <div className="col-span-1 lg:col-span-2">
                    <Accordions
                        questions={questions}
                        setQuestions={setQuestions}
                    />

                    <Summary
                        questions={questions}
                        formComplete={formComplete}
                    />

                    <CreateMyPlan
                        formComplete={formComplete}
                    />


                </div>


            </div>



        </section>
    )
}