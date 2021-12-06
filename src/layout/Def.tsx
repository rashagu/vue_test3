import {defineComponent, h, KeepAlive, resolveDynamicComponent} from 'vue'
import {RouteLocation, RouterView, useRoute} from 'vue-router';
import {ConfigProvider, Spin} from "ant-design-vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';

interface ExampleProps {
  name: string
}

const Def = defineComponent<ExampleProps>(props => {


  return () => (
    <RouterView>
      {{
        default: ({Component, route}: { Component: any, route: RouteLocation }) => {
          return route.meta.keepAlive ? <KeepAlive>
            <Component />
          </KeepAlive> : <Component />
        },
      }}
    </RouterView>
  )
})

Def.props = {
  name: String
}

export default Def
