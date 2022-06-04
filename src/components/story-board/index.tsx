import stories from '../../data/stories'
import IStory from '../../schemas/story'
import Story from './story'

const StoryBoard = () => {
  return (
    <section className="card flex gap-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      {stories.map((story: IStory) => {
        let username = story.username.split(' ').join('').toLowerCase()
        username = username.length <= 10 ? username : `${username.slice(0, 8)}...`
        return <Story key={story.id} username={username} image={story.image} />
      })}
    </section>
  )
}

export default StoryBoard
