import PrimaryButton from "@/app/lib/buttons/primaryButton"

export default function CreateMyPlan({formComplete}){

    return(
        <div className="flex justify-center lg:justify-end">
            <button 
            className="primary-button max-w-[217px] mt-[50px]" 
            disabled={!formComplete}>
                Create my plan!
            </button>
        
        </div>
    )
}