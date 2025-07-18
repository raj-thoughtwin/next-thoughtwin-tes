export function toCamelCase(slug: string): string {
    return slug?.replace(/-([a-z])/g, (match, letter) => letter?.toUpperCase());
}