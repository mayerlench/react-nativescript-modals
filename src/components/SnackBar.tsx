import * as React from "react";
import useSnackbar from "../hooks/useSnackbar";

export const SnackBarTest = React.forwardRef((props, ref: any) => {
    const snackbar = useSnackbar()

    return (
        <>
            <button onTap={() => snackbar.simple('hey there im a snack')}>make a snack from context</button>
        </>
    );
})
