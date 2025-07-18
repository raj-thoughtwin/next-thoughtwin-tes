import { TeamExtensionCalculatorDatabaseStep1Data, TeamExtensionCalculatorDevopsStep1Data, TeamExtensionCalculatorERPStep1Data, TeamExtensionCalculatorMobileStep1Data, TeamExtensionCalculatorWebStep1Data } from "./CalculatorData";

export const TabData: any = {
    web: [
        { role: "Middle", data: TeamExtensionCalculatorWebStep1Data[0] },
        { role: "Senior", data: TeamExtensionCalculatorWebStep1Data[0] },
        { role: "Architect", data: TeamExtensionCalculatorWebStep1Data[0] },
    ],
    mobile: [
        { role: "Middle", data: TeamExtensionCalculatorMobileStep1Data[0] },
        { role: "Senior", data: TeamExtensionCalculatorMobileStep1Data[0] },
        { role: "Architect", data: TeamExtensionCalculatorMobileStep1Data[0] },
    ],
    devops: [
        { role: "Middle", data: TeamExtensionCalculatorDevopsStep1Data[0] },
        { role: "Senior", data: TeamExtensionCalculatorDevopsStep1Data[0] },
        { role: "Architect", data: TeamExtensionCalculatorDevopsStep1Data[0] },
    ],
    database: [
        { role: "Middle", data: TeamExtensionCalculatorDatabaseStep1Data[0] },
        { role: "Senior", data: TeamExtensionCalculatorDatabaseStep1Data[0] },
        { role: "Architect", data: TeamExtensionCalculatorDatabaseStep1Data[0] },
    ],
    erp: [
        { role: "Middle", data: TeamExtensionCalculatorERPStep1Data[0] },
        { role: "Senior", data: TeamExtensionCalculatorERPStep1Data[0] },
        { role: "Architect", data: TeamExtensionCalculatorERPStep1Data[0] },
    ],
};