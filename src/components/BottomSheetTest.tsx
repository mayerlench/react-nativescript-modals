
import { ViewWithBottomSheetBase } from '@nativescript-community/ui-material-bottomsheet/bottomsheet-common';
import { StackLayout } from '@nativescript/core';
import * as React from 'react'
import * as RNS from 'react-nativescript'

// This is needed to keep the reconciler aware that it's the same portal on each render
const portalRoot = new RNS.NSVRoot();
const portalLabel = "bottomsheet:Unique label to describe my portal";

export default function BottomSheetTest() {
    // A ref to the container 
    const containerRef = React.useRef(null);

    // A ref for the react portal
    const portalRef = React.useRef(null);

    const handleOpenModal = () => {
        const container = containerRef.current!.nativeView as ViewWithBottomSheetBase
        container.showBottomSheet({
            view: portalRef.current!.nativeView,
            context: {},
            closeCallback: (args) => {
                console.log(`Closed with args`, args);
            }
        });
    }

    const handleCloseModal = () => {
        const portalView = portalRef.current?.nativeView

        portalView.closeBottomSheet({ name: 'react-nativescript is king' })
    }

    return (
        <>
            <stackLayout ref={containerRef}>
                <button text="Open bottom sheet" onTap={handleOpenModal} />
            </stackLayout>
            {/*
                This portal is not rendered below the button.
                It's rendered into a null root, effectively creating a new DOM tree.
            */}
            {
                RNS.createPortal(
                    (
                        <stackLayout ref={portalRef} style={{ margin: 100 }}>
                            <label text="This is a bottom sheet!" />
                            <button text="Close Bottom Sheet" onTap={handleCloseModal} />
                        </stackLayout>
                    ),
                    portalRoot,
                    portalLabel
                )
            }
        </>
    );
}