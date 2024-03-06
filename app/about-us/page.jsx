import PageHeader from "../lib/pageHeader";
import OurCommitment from "./components/ourCommitment";
import UncompromisingQuality from "./components/uncompromisingQuality";
import Headquarters from "./components/headquarters";
import MarginWrapper from "../lib/layout/marginWrapper";

export default function AboutUs(){

    return(
        <main>
            <MarginWrapper>

                <PageHeader
                    title={'About Us'}
                    text={'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.'}
                />

                <OurCommitment/>
                <UncompromisingQuality/>
                <Headquarters/>
                
            </MarginWrapper>
        </main>
    )
}