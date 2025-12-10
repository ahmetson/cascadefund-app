
// Cookie management functions
export function getCookie(name: string): string | null {
    if (typeof document === 'undefined') return null
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
        return decodeURIComponent(parts.pop()?.split(';').shift() || '')
    }
    return null
}

export function setCookie(name: string, value: string, days: number = 30): void {
    if (typeof document === 'undefined') return
    const expirationDate = new Date()
    expirationDate.setDate(expirationDate.getDate() + days)
    const expires = expirationDate.toUTCString()
    document.cookie = `${name}=${value}; expires=${expires}; path=/`
}

export function clearCookie(name: string): void {
    if (typeof document === 'undefined') return
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
}

// Emit demo events
export function emitEvent(type: string, detail: any): void {
    if (typeof window === 'undefined') return
    window.dispatchEvent(
        new CustomEvent(type, {
            detail,
        })
    )
}

// Extract the data type from an action's return type
type ExtractActionData<T> = T extends (formData: FormData) => Promise<{ data?: infer D; error?: { message: string } }>
    ? D
    : never

// Generic action caller
export async function callAction<TAction extends (formData: FormData) => Promise<{ data?: any; error?: { message: string } }>>(
    action: TAction,
    data: Record<string, string>
): Promise<{ success: boolean; data?: ExtractActionData<TAction>; error?: string }> {
    try {
        const formData = new FormData()
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value)
        })

        const { data: resultData, error } = await action(formData)

        if (error) {
            return {
                success: false as const,
                error: error.message,
            }
        }

        return {
            success: true as const,
            data: resultData,
        }

    } catch (err: any) {
        return {
            success: false,
            error: err.message || 'An error occurred. Please try again.',
        }
    }
}
