import { AllServices } from "@/constants/servicesRoutes";

export async function getServiceSlug(service: string) {
    return AllServices.find((t) => t.uniqueField === service) || null;
}

export async function getAllServiceSlugs(): Promise<{ servicesPages: string }[]> {
    return AllServices.map((service) => ({
        servicesPages: service.uniqueField,
    }));
}
