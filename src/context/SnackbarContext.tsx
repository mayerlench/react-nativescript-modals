import React, { createContext, useRef } from 'react'
import { SnackBar, SnackBarOptions } from '@nativescript-community/ui-material-snackbar';
import { navigationRef } from '../utils/navigationRef';

export interface SnackbarContextValue {
    simple: (message: string, textColor?: string, backgroundColor?: string, maxLines?: number, isRTL?: boolean) => Promise<any>
    action: (options: SnackBarOptions) => Promise<any>
}

const SnackbarContext = createContext<SnackbarContextValue>({
    simple: () => Promise.resolve(),
    action: () => Promise.resolve(),
})

export const SnackbarProvider = ({ children }) => {
    const ref = useRef(null)
    const snackbar = new SnackBar();

    const simple = (message: string, textColor?: string, backgroundColor?: string, maxLines?: number, isRTL?: boolean) => {
        const view = ref.current.nativeView
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
                {children}
            </stackLayout>
        </SnackbarContext.Provider>
    )
}

export const SettingsConsumer = SnackbarContext.Consumer
export default SnackbarContext