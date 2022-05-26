interface IProps {
  username: string
  image: string
}

const MyDay = ({ username, image }: IProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="rounded-full overflow-hidden  w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 p-1">
        <div className="rounded-full overflow-hidden h-14 ring-[2px] ring-white">
          <img className="w-full" src={image} alt={image} />
        </div>
      </div>
      <span className="text-xs">{username}</span>
    </div>
  )
}

export default MyDay
