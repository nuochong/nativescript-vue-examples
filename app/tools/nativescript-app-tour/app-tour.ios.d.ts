import { AppTour as AppTourBase, TourStop } from './app-tour.common';
export declare class AppTour extends AppTourBase {
    currentIndex: number;
    delegate: AppTourDelegate;
    buildNativeTour(stops: TourStop[]): void;
    show(): void;
    next(): void;
    reset(): void;
}
export declare class AppTourDelegate extends NSObject {
    static ObjCProtocols: {
        prototype: MaterialShowcaseDelegate;
    }[];
    private _owner;
    readonly owner: AppTour;
    static initWithOwner(owner: any): AppTourDelegate;
    showCaseWillDismissWithShowcaseDidTapTarget(showcase: any, didTapTarget: any): void;
    showCaseDidDismissWithShowcaseDidTapTarget(showcase: any, didTapTarget: any): void;
}
