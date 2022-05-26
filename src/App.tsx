import Feed from './components/feed'
import Layout from './components/layout'
import Panel from './components/panel'
import Story from './components/Story'

const App = () => {
  return (
    <Layout>
        <div className='lg:flex-grow space-y-3 mx-auto'>
          <Story />
          <Feed />
        </div>
        <Panel />
    </Layout>
  )
}

export default App


