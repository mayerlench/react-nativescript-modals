import * as React from "react";
import { StyleSheet } from "react-nativescript";
import Modal from "./Modal";
import BottomSheet from "./BottomSheet";
import { SnackBarTest } from "./SnackBar";

export function HomeScreen() {
    const containerRef = React.useRef(null)

    return (
        <flexboxLayout style={styles.container} ref={containerRef}>
            <Modal />
            <BottomSheet />
            <SnackBarTest />
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