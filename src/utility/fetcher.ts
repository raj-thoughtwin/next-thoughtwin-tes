type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

interface ApiRequestOptions {
    method?: RequestMethod
    body?: any
    headers?: HeadersInit
}

export async function apiRequest<T>(
    endpoint: string,
    method: RequestMethod = "GET",
    body: any = null,
    headers: HeadersInit = {}
): Promise<T> {
    try {
        const config: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        }

        if (body) config.body = JSON.stringify(body)

        const response = await fetch(`/api/${endpoint}`, config)

        if (!response.ok) throw await response.json()

        return (await response.json()) as T
    } catch (error) {
        console.error("Error making request:", error)
        throw error
    }
}

// Convenience functions
export const GET = <T>(endpoint: string, headers: HeadersInit = {}): Promise<T> => apiRequest<T>(endpoint, "GET", null, headers)

export const POST = <T>(endpoint: string, body: any, headers: HeadersInit = {}): Promise<T> =>
    apiRequest<T>(endpoint, "POST", body, headers)

export const PUT = <T>(endpoint: string, body: any, headers: HeadersInit = {}): Promise<T> => apiRequest<T>(endpoint, "PUT", body, headers)

export const PATCH = <T>(endpoint: string, body: any, headers: HeadersInit = {}): Promise<T> =>
    apiRequest<T>(endpoint, "PATCH", body, headers)

export const DELETE = <T>(endpoint: string, body: any, headers: HeadersInit = {}): Promise<T> =>
    apiRequest<T>(endpoint, "DELETE", body, headers)
