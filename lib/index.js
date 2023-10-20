"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * HTML.Viewport
 * Dynamically creating or changing the content DOM viewport
 */
class HTMLViewport {
    constructor() {
        Object.defineProperty(this, "viewport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "content", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.viewport = this.mountViewport();
        this.content = this.viewport.content === '' ? [] : this.viewport.content.split(',').map((content) => content.trim().split('='));
    }
    mountViewport() {
        const viewport = document.head.querySelector("meta[name='viewport']");
        if (viewport) {
            return viewport;
        }
        else {
            const newViewport = document.createElement('meta');
            newViewport.name = 'viewport';
            newViewport.content = '';
            document.head.appendChild(newViewport);
            return newViewport;
        }
    }
    findIndex(name) {
        return this.content.findIndex((content) => content[0] === name);
    }
    save() {
        this.viewport.content = this.content.map((content) => content.join('=')).join(',');
    }
    /**
     * Add a new property
     * @param {Name} name Property name
     * @param {Value} value Property value
     * @returns {void}
     */
    add(name, value) {
        if (this.has(name))
            return;
        this.content.push([name, String(value)]);
        this.save();
    }
    /**
     * Delete an existing property
     * @param {keyofTName} name Property name
     * @returns {void}
     */
    remove(name) {
        const index = this.findIndex(name);
        if (index < 0)
            return;
        this.content.splice(index, 1);
        this.save();
    }
    /**
     * Check if the property exists
     * @param {keyofTName} name Property name
     * @returns {boolean}
     */
    has(name) {
        return this.findIndex(name) >= 0;
    }
}
exports.default = HTMLViewport;
