export declare class Blur {
    constructor();
    private effectViewMap;
    on(nsView: any, viewName: any, radius: any, theme?: any, duration?: any): Promise<{}>;
    off(viewName: any, duration?: any): Promise<{}>;
}
