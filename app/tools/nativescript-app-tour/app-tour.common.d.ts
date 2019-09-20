export interface TourStop {
    view: {
        ios;
        android;
    };
    title: string;
    titleTextSize?: number;
    titleTextColor?: string;
    description?: string;
    descriptionTextSize?: number;
    descriptionTextColor?: string;
    outerCircleColor?: string;
    outerCircleOpacity?: number;
    innerCircleColor?: string;
    rippleColor?: string;
    innerCircleRadius?: number;
    dismissable?: boolean;
}
export interface TourEvents {
    finish?: Function;
    onStep?: Function;
    onCancel?: Function;
}
export declare class AppTour {
    stops: TourStop[];
    nativeTour: any;
    handlers: any;
    defaults: TourStop;
    defaultHandlers: TourEvents;
    constructor(stops: TourStop[], handlers?: TourEvents);
    updateStops(stops: TourStop[]): void;
    buildNativeTour(stops: TourStop[], handlers: TourEvents): void;
    show(): void;
    reset(): void;
}
