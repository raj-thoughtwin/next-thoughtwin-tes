export const getStepTitlesMvpCalculator = (formData: any) => [
  { title: "Choose your industry", value: formData.industry || "", desc: formData?.industryDesc || '' },
  { title: "What’s your business goal?", value: formData.businessGoal || "" },
  { title: "Specify the date to release your project", value: formData.releaseProjectDate || "" },
  { title: "Choose your platform", value: formData.platformType || "" },
  { title: "How big is your app?", value: formData.screenSize || "" },
  { title: "Do you need custom designs for your app?", value: formData.customDesign || "" },
  { title: "Cloud infrastructure provider", value: formData.cloudPlateform || "" },
  {
    title: "What features should your app have?",
    value: Array.isArray(formData.appFeature) ? formData.appFeature.join(", ") : formData.appFeature || "",
    desc: formData?.appFeatureDesc || ''
  },
  {
    title: "Additional information",
    value: Array.isArray(formData.additionalInfo) ? formData.additionalInfo.join(", ") : formData.additionalInfo || "",
  },
  {
    title: "When do you want to start?",
    value: Array.isArray(formData.projectDelivery) ? formData.projectDelivery.join(", ") : formData.projectDelivery || "",
  },
];

export const getStepTitlesSoftwareCalculator = (formData: any) => [
  { title: "What would you like to do?", value: formData.whatToDo || "" },
  { title: "What do you already have?", value: formData.alreadyHave || "" },
  { title: "Platform type", value: formData.platformType || "" },
  { title: "Choose your industry", value: formData.industry || "", desc: formData?.industryDesc || '' },
  {
    title: "Healthcare & Life-Sciences solution type",
    value: Array.isArray(formData.solutionTypes) ? formData.solutionTypes.join(", ") : formData.solutionTypes || "", desc: formData?.solutionTypesDesc || ''
  },
  { title: "When do you want to start?", value: formData.projectDelivery || "" },

];

export const SoftwareDevelopmentTitleMap: Record<number, string> = {
  0: "What would you like to do?",
  1: "What do you already have?",
  2: "Platform type",
  3: "Choose your industry",
  4: "solution type",
  5: "When do you want to start?",
};

export const TeamExtensionTitleMap: Record<number, string> = {
  0: "Please choose technologies",
  1: "Do you need other specialists?",
  2: "How fast do you need an extension?",

};

export const MvpTitleMap: Record<number, string> = {
  0: "Choose your industry",
  1: "What’s your business goal?",
  2: "Specify the date to release your project",
  3: "Choose your platform",
  4: "How big is your app?",
  5: "Do you need custom designs for your app?",
  6: "Cloud infrastructure provider",
  7: "What features should your app have?",
  8: "Additional information",
  9: "When do you want to start?"
};