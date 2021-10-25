import React, { createContext } from 'react'
import { SnackBar, SnackBarOptions } from '@nativescript-community/ui-material-snackbar';
import { getCurrentPage } from '@nativescript/core';
import { getRootView } from '@nativescript/core/application';

export interface SnackbarContextValue {
    simple: (message: string, textColor?: string, backgroundColor?: string, maxLines?: number, isRTL?: boolean) => Promise<any>
    action: (options: SnackBarOptions) => Promise<any>
    dismiss: (options: SnackBarOptions) => Promise<any>
}

const SnackbarContext = createContext<SnackbarContextValue>({
    simple: () => Promise.resolve(),
    action: () => Promise.resolve(),
    dismiss: () => Promise.resolve(),
})

export const SnackbarProvider = ({ children }) => {
    const snackbar = new SnackBar();

    const simple = (message: string, textColor?: string, backgroundColor?: string, maxLines?: number, isRTL?: boolean) => {
        const page = getCurrentPage()
        const view = page || getRootView()

        return snackbar.action({
            message,
            textColor,
            backgroundColor,
            maxLines,
            isRTL,
            view
        })
    }

    const action = (options: SnackBarOptions) => {
        const page = getCurrentPage()
        const view = page || getRootView()
        return snackbar.action({ ...options, anchorView: view })
    }

    return (
        <SnackbarContext.Provider
            value={{
                simple,
                action,
                dismiss: snackbar.dismiss
            }}
        >
            {children}
        </SnackbarContext.Provider>
    )
}

export const SettingsConsumer = SnackbarContext.Consumer
export default SnackbarContext
