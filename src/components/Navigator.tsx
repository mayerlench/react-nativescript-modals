import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./HomeScreen";
import { navigationRef } from "../utils/navigationRef";
import { SnackbarProvider } from "../context/SnackbarContext";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <SnackbarProvider>
        <BaseNavigationContainer ref={navigationRef}>
            <StackNavigator.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "white",
                    },
                    headerShown: true,
                }}
            >
                <StackNavigator.Screen
                    name="Home"
                    component={HomeScreen}
                />
            </StackNavigator.Navigator>
        </BaseNavigationContainer>
    </SnackbarProvider>

);
