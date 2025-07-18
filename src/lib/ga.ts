export const GA_TRACKING_ID = 'G-06CY96V1PP';

export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

export const handleEvent = ({
    action,
    params,
}: {
    action: string;
    params: Record<string, any>;
}) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', action, params);
    }
};

// Track GA4 custom events using gtag
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

// Handle general click event
export const handleClick = (
    label: string,
    category: string = 'navigation',
    action: string = 'click'
) => {
    sendEvent({ action, category, label });
};

// Track session/page exit
export const trackExit = (duration: number) => {
    if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === "function") {
        window.gtag("event", "user_engagement", {
            engagement_time_msec: duration * 1000,
        });
    }
};

// Track a custom click
export const trackClick = ({
    category,
    action,
    label,
    value,
}: {
    category: string;
    action: string;
    label?: string;
    value?: number;
}) => {
    if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === "function") {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value,
        });
    }
};

// Centralized GA4 event names
export const GTM_EVENTS = {
    PAGE_VIEW: 'page_view',
    PAGE_EXIT: 'page_exit',
    CUSTOM_CLICK: 'custom_click',
};
