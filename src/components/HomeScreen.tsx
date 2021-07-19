import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";
import Modal from "./Modal";
import BottomSheet from "./BottomSheet";
import { SnackBarTest } from "./SnackBar";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
}

export function HomeScreen({ navigation }: HomeScreenProps) {
    const containerRef = React.useRef(null)
    return (
        <flexboxLayout style={styles.container} ref={containerRef}>
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