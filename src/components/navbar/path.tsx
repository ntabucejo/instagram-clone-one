interface IProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const Path = ({ Icon }: IProps) => {
  return (
    <li>
      <a className="cursor-pointer">
        <Icon className="w-7 h-7" />
      </a>
    </li>
  )
}

export default Path
