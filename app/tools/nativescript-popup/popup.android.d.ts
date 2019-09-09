import { Common, PopupOptions } from './popup.common';
export declare class Popup extends Common {
    private _popup;
    private _options;
    private resolveData;
    resolve: any;
    reject: any;
    private _view;
    constructor(options?: PopupOptions);
    showPopup(source: any, view: any): Promise<boolean>;
    hidePopup(data?: any): void;
    private _stylePopup();
}
