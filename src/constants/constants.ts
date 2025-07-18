const servicesList: Record<string, string> = {
    CRM: "CRM",
    WEB: "WEB",
    ERP: "ERP",
    IOT: "IOT",
    UI_UX: "UI_UX",
    MOBILE_APPS: "MOBILE_APPS",
    PRODUCTS: "PRODUCTS",
    OTHERS: "OTHERS",
};

// Convert object to an array of keys or values
export const servicesArray = Object.values(servicesList);
