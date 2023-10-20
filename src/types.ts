export type TInteractiveWidget = 'resizes-visual' | 'resizes-content' | 'overlays-content';

export type TName = {
	'width': string;
	'height': string;
	'initial-scale': number;
	'minimum-scale': number;
	'maximum-scale': number;
	'user-scalable': 0 | 1 | 'yes' | 'no';
	'interactive-widget': TInteractiveWidget;
};