import * as React from "react";
import { StyleSheet } from "react-nativescript";
import Modal from "./Modal";
import BottomSheet from "./BottomSheet";
import { SnackBarTest } from "./SnackBar";
import useSnackbar from "../hooks/useSnackbar";

export function HomeScreen() {
    const containerRef = React.useRef(null)
    const snackbar = useSnackbar()
    return (
        <flexboxLayout style={styles.container} ref={containerRef}>
            <button onTap={() => snackbar.simple('hey there im a snack')}>make a snack from context</button>
            <Modal />
            <BottomSheet />
            <SnackBarTest ref={containerRef} />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    }
});