import IPerson from '../../schemas/person'
import Button from './button'

interface IProps {
  person: IPerson
}

const Person = ({ person }: IProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className='flex gap-3 items-center'>
        <div className="rounded-full overflow-hidden w-8 h-8">
          <img className="w-full" src={person.image} alt={person.username} />
        </div>

        <div className="text-xs">
          <h3 className="font-semibold text-sm">{person.username}</h3>
          <h4 className="opacity-50">Followed by {person.followedBy}</h4>
        </div>
      </div>

      <Button>Follow</Button>
    </div>
  )
}

export default Person
