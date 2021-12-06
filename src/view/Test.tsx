import {defineComponent, ref, h, computed, reactive, inject} from 'vue'

interface ExampleProps {
  name?: string,
}

const Test = defineComponent<ExampleProps>(props => {
  return () => (
    <div style={{padding: '2rem 2.5rem'}}>
      123驱蚊器asdadasdasdasd
    </div>
  )
})

Test.props = {
  name: String,
}

export default Test
