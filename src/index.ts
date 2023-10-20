import {
	TName,
	TInteractiveWidget
} from "./types";

/**
 * HTML.Viewport
 * Dynamically creating or changing the content DOM viewport
 */
class HTMLViewport {
	private viewport: HTMLMetaElement;
	private content: string[][];

	constructor() {
		this.viewport = this.mountViewport();
		this.content = this.viewport.content === '' ? [] : this.viewport.content.split(',').map((content) => content.trim().split('='));
	}

	private mountViewport(): HTMLMetaElement {
		const viewport = document.head.querySelector<HTMLMetaElement>("meta[name='viewport']");
		if (viewport) {
			return viewport;
		}else{
			const newViewport = document.createElement('meta');
			newViewport.name = 'viewport';
			newViewport.content = '';
			document.head.appendChild(newViewport);
			return newViewport;
		}
	}

	private findIndex(name: string): number {
		return this.content.findIndex((content) => content[0] === name);
	}

	private save(): void {
		this.viewport.content = this.content.map((content) => content.join('=')).join(',');
	}
	
	/**
	 * Add a new property
	 * @param {Name} name Property name
	 * @param {Value} value Property value
	 * @returns {void}
	 */
	public add<Name extends keyof TName, Value extends TName[Name]>(name: Name, value: Value): void {
		if (this.has(name)) return;
		this.content.push([name, String(value)]);
		this.save();
	}

	/**
	 * Delete an existing property
	 * @param {keyofTName} name Property name
	 * @returns {void}
	 */
	public remove (name: keyof TName): void {
		const index = this.findIndex(name);
		if (index < 0) return;
		this.content.splice(index, 1);
		this.save();
	}

	/**
	 * Check if the property exists
	 * @param {keyofTName} name Property name
	 * @returns {boolean}
	 */
	public has(name: keyof TName): boolean {
		return this.findIndex(name) >= 0;
	}
}

export type {
	TName,
	TInteractiveWidget
}

export default HTMLViewport;