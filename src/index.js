import ToolTip from './components/ToolTip.vue'

export function install(Vue) {
    if (!install.installed) {
        install.installed = true
        Vue.component('ToolTip', ToolTip)
    }
}

const plugin = { install }

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
} else if (typeof global !== 'undefined' && global.Vue) {
    global.Vue.use(plugin)
}

export default ToolTip