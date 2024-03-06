import HowItWorksDark from './components/howItWorksDark';
import PageHeader from './components/pageheader';
import MarginWrapper from '../lib/layout/marginWrapper';
import CreatePlan from './components/createPlan';

export default function CreateYourPlan(){


    return(
        <main>
            <MarginWrapper>
                <PageHeader
                    title={'Create Plan'}
                    text={'Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.'}
                />
            </MarginWrapper>

            <HowItWorksDark/>

            <MarginWrapper>

                <CreatePlan/>

            </MarginWrapper>



        </main>
    )
}