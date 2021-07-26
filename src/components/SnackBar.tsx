import * as React from "react";
import { SnackBar } from '@nativescript-community/ui-material-snackbar';
import { Button } from "@nativescript/core";
import { useRef } from "react";
import { getRootView } from "@nativescript/core/application";

const snackbar = new SnackBar();

export const SnackBarTest = (props) => {
    const ref = useRef(null)
    function showSimpleSnackbar() {
        const view = getRootView()
        console.log('🚀 ~ file: SnackBar.tsx ~ line 13 ~ showSimpleSnackbar ~ view', view)
        snackbar.action({
            actionText: `I'm a simple snackbar`,
            message: 'This is a snack',
            view: view
        }).then(result => console.log('Simple Snackbar:', result));
    }

    return (
        <button ref={ref} text="Show Snack" onTap={showSimpleSnackbar} />
    );
}
