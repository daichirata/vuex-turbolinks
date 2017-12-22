# vuex-turbolinks

vuex-turbolinks is a package to allow you to easily add Vuex store to your Turbolinks powered apps. We handle the Turbolinks events to properly setup and teardown your Vuex store on the page.

## How does it work ?

When turbolinks:visit event is fired, it is restored to the initial state of the store.

``` javascript
const storeState = cloneDeep(store.state);

document.addEventListener('turbolinks:visit', () => {
  store.replaceState(cloneDeep(storeState));
});
```

## Install

```
npm install --save vuex-turbolinks
```

or

```
yarn add vuex-turbolinks
```

## Usage

Register the plugin

``` js
import Vuex from 'vuex'
import VuexTurbolinks from 'vuex-turbolinks'

const plugins = [
  VuexTurbolinks,
  ... // other plugins
]

new Vuex.Store({
  // state,
  // actions,
  // mutations,
  plugins,
})
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
