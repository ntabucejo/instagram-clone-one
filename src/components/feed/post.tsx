interface IProps {
  post: any
}

const Post = ({ post }: IProps) => {
  return (
    <div className="relative card">
      <div className="relative -mx-5 aspect-square overflow-hidden">
        <img className="w-full" src={post.image} alt={post.username} />
      </div>
    </div>
  )
}

export default Post
