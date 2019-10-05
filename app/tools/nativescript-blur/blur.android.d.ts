export declare class Blur {
    constructor();
    private nsViewMap;
    on(nsView: any, viewName: any, radius: any, theme?: any, duration?: any): Promise<{}>;
    off(viewName: any, duration?: any): Promise<{}>;
}
