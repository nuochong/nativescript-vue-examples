import { AppTour as AppTourBase, TourStop } from './app-tour.common';
export declare class AppTour extends AppTourBase {
    currentStop: number;
    buildNativeTour(stops: TourStop[], handlers: any): void;
    show(): void;
    reset(): void;
}
