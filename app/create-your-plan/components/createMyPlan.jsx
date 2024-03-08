import PrimaryButton from "@/app/lib/buttons/primaryButton";
import CreateYourPlanDialog from './createMyPlanDialog';

import { useState } from "react";

export default function CreateMyPlan({formComplete, questions}){

    const [openDialog, setOpenDialog] = useState(false);

    return(
        <>
            <div className="flex justify-center lg:justify-end">
                <button
                    className="primary-button max-w-[217px] mt-[50px]"
                    disabled={!formComplete}
                    onClick={() => setOpenDialog(true)}
                >
                    
                    Create my plan!
                </button>

            </div>

            <CreateYourPlanDialog
                questions={questions}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}            
            />
        </>
    )
}