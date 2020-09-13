export { default as MainHeader } from '../..\\components\\MainHeader.vue'

export const LazyMainHeader = import('../..\\components\\MainHeader.vue' /* webpackChunkName: "components_MainHeader" */).then(c => c.default || c)
