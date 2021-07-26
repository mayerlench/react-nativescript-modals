import React, { createContext, useRef } from 'react'
import { SnackBar, SnackBarOptions } from '@nativescript-community/ui-material-snackbar';

export interface SnackbarContextValue {
    simple: (message: string, textColor?: string, backgroundColor?: string, maxLines?: number, isRTL?: boolean) => Promise<any>
    action: (options: SnackBarOptions) => Promise<any>
}

const SnackbarContext = createContext<SnackbarContextValue>({
    simple: () => Promise.resolve(),
    action: () => Promise.resolve(),
})

export const SnackbarProvider = ({ children }) => {
    const snackbar = new SnackBar();
    const ref = useRef(null)

    const simple = (message: string, textColor?: string, backgroundColor?: string, maxLines?: number, isRTL?: boolean) => {
        const view = ref.current.nativeView
        console.log('🚀 ~ file: snackbarContext.tsx ~ line 22 ~ simple ~ view', view)
        return snackbar.action({
            message,
            textColor,
            backgroundColor,
            maxLines,
            isRTL,
            view
        })
    }
    const action = (options: SnackBarOptions) => snackbar.action({ ...options, view: ref.current.nativeView })

    return (
        <SnackbarContext.Provider
            value={{
                simple,
                action
            }}
        >
            <stackLayout ref={ref}>
                <label text="HWELLO"></label>
                {children}
            </stackLayout>
        </SnackbarContext.Provider>
    )
}

export const SettingsConsumer = SnackbarContext.Consumer
export default SnackbarContext