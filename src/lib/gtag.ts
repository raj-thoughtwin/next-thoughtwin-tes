declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

export const sendEvent = ({
    action,
    category,
    label,
    value,
}: {
    action: string;
    category: string;
    label?: string;
    value?: number;
}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value,
        });
    }
};

// Add dynamic event handler
export const handleClick = (
    label: string,
    category: string = 'navigation',
    action: string = 'click'
) => {
    sendEvent({ action, category, label });
};

export const trackExit = (duration: number) => {
    window.dataLayer.push({
        event: 'user_exit',
        duration,
    });
};

export const trackClick = ({
    category,
    action,
    label,
}: {
    category: string;
    action: string;
    label?: string;
}) => {
    window.dataLayer.push({
        event: 'custom_click',
        event_category: category,
        event_action: action,
        event_label: label,
    });
};