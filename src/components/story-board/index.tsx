import stories from '../../library/data/stories'
import People from './people'

const StoryBoard = () => {
  return (
    <section className="card flex gap-4 overflow-x-scroll scrollbar-hide">
      {stories.map((story) => {
        let username = story.username.split(' ').join('').toLowerCase()
        username = username.length <= 10 ? username : `${username.slice(0, 8)}...`
        return <People key={story.id} username={username} image={story.image} />
      })}
    </section>
  )
}

export default StoryBoard
