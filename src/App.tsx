import Feed from './components/feed'
import Layout from './components/layout'
import Panel from './components/panel'
import StoryBoard from './components/story-board'

const App = () => {
  return (
    <Layout>
      <div className="lg:flex-grow space-y-3 mx-auto">
        <StoryBoard />
        <Feed />
      </div>
      <Panel />
    </Layout>
  )
}

export default App
