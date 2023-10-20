import { TName, TInteractiveWidget } from "./types";
/**
 * HTML.Viewport
 * Dynamically creating or changing the content DOM viewport
 */
declare class HTMLViewport {
    private viewport;
    private content;
    constructor();
    private mountViewport;
    private findIndex;
    private save;
    /**
     * Add a new property
     * @param {Name} name Property name
     * @param {Value} value Property value
     * @returns {void}
     */
    add<Name extends keyof TName, Value extends TName[Name]>(name: Name, value: Value): void;
    /**
     * Delete an existing property
     * @param {keyofTName} name Property name
     * @returns {void}
     */
    remove(name: keyof TName): void;
    /**
     * Check if the property exists
     * @param {keyofTName} name Property name
     * @returns {boolean}
     */
    has(name: keyof TName): boolean;
}
export type { TName, TInteractiveWidget };
export default HTMLViewport;
