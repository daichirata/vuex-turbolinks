import cloneDeep from 'lodash.clonedeep';

const plugin = (store) => {
  const storeState = cloneDeep(store.state);

  document.addEventListener('turbolinks:visit', () => {
    store.replaceState(cloneDeep(storeState));
  });
};
export default plugin;
