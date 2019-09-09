import { Common, MenuOptions } from "./menu.common";
export { MenuOptions } from "./menu.common";
export declare class Menu extends Common {
    static popup(options: MenuOptions): Promise<{
        id: number;
        title: string;
    } | string | boolean | any>;
}
