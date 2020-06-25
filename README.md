# stencil in vue example
This is an example Project showcasing the useage of stencil-components in an Vue.js-Project.

## Using the components
- Run `npm install stencil-components --save`

- In your main.js add the following

```js
import { applyPolyfills, defineCustomElements } from 'stencil-components/loader';

applyPolyfills().then(() => {
    // Surrounding the defineCustomElemnts() with applyPolyfills() is only needed if you would like to use the components on older browsers
    defineCustomElements();
});
```
- Then you can use the element anywhere in your template, JSX, html etc

Need more information? Check out the docs [here](https://stenciljs.com/docs/vue).

