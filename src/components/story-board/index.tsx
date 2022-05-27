import stories from '../../library/data/stories'
import IStory from '../../library/schemas/interfaces/story'
import Story from './story'

const StoryBoard = () => {
  return (
    <section className="card md:flex gap-4 overflow-x-scroll scrollbar-hide hidden">
      {stories.map((story: IStory) => {
        let username = story.username.split(' ').join('').toLowerCase()
        username = username.length <= 10 ? username : `${username.slice(0, 8)}...`
        return <Story key={story.id} username={username} image={story.image} />
      })}
    </section>
  )
}

export default StoryBoard
