import Feed from './components/feed'
import Layout from './components/layout'
import Panel from './components/panel'
import StoryBoard from './components/story-board'

const App = () => {
  return (
    <Layout>
      <div className="space-y-3 lg:mx-0">
        <StoryBoard />
        <Feed />
      </div>
      <Panel />
    </Layout>
  )
}

export default App
