import {
  defineComponent,
  h,
  KeepAlive,
  Transition,
} from 'vue'
import {
  RouteLocation,
  RouterView,
} from 'vue-router';
import {
  ConfigProvider, Layout, LayoutHeader, LayoutContent, LayoutSider,
} from "ant-design-vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';

interface ExampleProps {
  name: string
}

const Def = defineComponent<ExampleProps>(props => {
  return () => (
    <ConfigProvider locale={zhCN}>

      <Layout>
        <LayoutSider collapsed={false} style={{backgroundColor: '#fff',}}>
        </LayoutSider>
        <RouterView>
          {{
            default: ({Component, route}: { Component: any, route: RouteLocation }) => {
              return route.meta.keepAlive ?
                <Transition name="fade" mode="out-in">
                  <KeepAlive>
                    <div>
                      <Component/>
                    </div>
                  </KeepAlive>
                </Transition> : <Component/>
            },
          }}
        </RouterView>
      </Layout>
    </ConfigProvider>
  )
})

Def.props = {
  name: String
}

export default Def
