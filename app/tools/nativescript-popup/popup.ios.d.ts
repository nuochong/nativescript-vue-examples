import { Common, PopupOptions } from './popup.common';
export declare class Popup extends Common {
    private _popupController;
    private _options;
    private resolveData;
    resolve: any;
    reject: any;
    constructor(options?: PopupOptions);
    showPopup(source: any, view: any): Promise<boolean>;
    didDismiss: () => void;
    hidePopup(data?: any): void;
    private _stylePopup(view, isTablet);
}
export declare class UIPopoverPresentationControllerDelegateImpl extends NSObject implements UIPopoverPresentationControllerDelegate {
    static ObjCProtocols: {
        prototype: UIPopoverPresentationControllerDelegate;
    }[];
    private _owner;
    static initWithOwner(owner: WeakRef<Popup>): UIPopoverPresentationControllerDelegateImpl;
    adaptivePresentationStyleForPresentationController?(controller: UIPresentationController): UIModalPresentationStyle;
    popoverPresentationControllerDidDismissPopover(popoverPresentationController: UIPopoverPresentationController): void;
}
