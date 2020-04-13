const requireComponent = require.context('./',true,/\.vue$/)

const install = (Vue, opts={})=>{
    if (install.installed) return
    install.installed
    requireComponent.keys().map(component => {
        const config = requireComponent(component)
        const componentName = config.default.name
        console.log(config,componentName)
        Vue.component(componentName,config.default || config)        
    })
    Vue.prototype.$VUEQH = {
        size: opts.size || '',
        zindex:opts.zindex || 2000,
        type:opts.type || ''
    }
}
export default {
    install
}