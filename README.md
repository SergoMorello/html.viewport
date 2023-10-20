<h1>HTML.Viewport</h1>

##	Dynamically creating or changing the content DOM viewport

## install
```
npm i html-viewport
```

### Examples
```js
const viewport = new HTMLViewport;

//Add a new property
viewport.add('width', 'device-width');

//Check if the property exists
viewport.has('width');

//Delete an existing property
viewport.remove('width');

```