import { VPCarbon } from 'vitepress-carbon'
import { h } from "vue"
//import Comment from "./components/Comment.vue"
import Contributors from "./components/Contributors.vue"

// uncomment to test CSS variables override
// import './override.css'
export default {
    ...VPCarbon,
    Layout: () => {
      return h(VPCarbon.Layout, null, {
        // https://vitepress.dev/guide/extending-default-theme#layout-slots
        //"doc-after": () => h(Comment),
        "doc-footer-before": () => h(Contributors),
      })
    }
  }