import { NavigationContainerRef } from '@react-navigation/core';
import * as React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name, params) {
    if (navigationRef?.current?.getRootState()) {
        // Perform navigation if the app has mounted
        navigationRef.current.navigate(name, params);
    } else {
        console.log('ERROR NAVIGATING!!!')
        // You can decide what to do if the app hasn't mounted
        // You can ignore this, or add these actions to a queue you can call later
    }
}

export function goBack() {
    if (navigationRef?.current?.canGoBack()) {
        navigationRef.current.goBack()
    }
}