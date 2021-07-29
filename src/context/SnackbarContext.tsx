import React, { createContext, useRef } from 'react'
import { SnackBar, SnackBarOptions } from '@nativescript-community/ui-material-snackbar';
import { Frame, StackLayout } from '@nativescript/core';
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
    const ref = useRef(null)
    const snackbar = new SnackBar();

    const simple = (message: string, textColor?: string, backgroundColor?: string, maxLines?: number, isRTL?: boolean) => {
        const view = getRootView() as StackLayout
        const frame = view.getChildAt(0) as Frame
        const page = frame.currentEntry ? frame.currentEntry.create() : view

        return snackbar.action({
            message,
            textColor,
            backgroundColor,
            maxLines,
            isRTL,
            view: page
        })
    }

    const action = (options: SnackBarOptions) => snackbar.action({ ...options, view: ref.current.nativeView })
    return (
        <SnackbarContext.Provider
            value={{
                simple,
                action,
                dismiss: snackbar.dismiss
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