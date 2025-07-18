export { }

declare global {
    interface Window {
        // dataLayer: Record<string, any>[]

        gtag?: (...args: any[]) => void;
        dataLayer: Record<string, any>[];

    }
}
