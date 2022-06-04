import people from '../../data/people'
import IPerson from '../../schemas/person'
import Button from './button'
import Person from './person'

const Panel = () => {
  return (
    <section className="w-[22rem] hidden lg:block lg:fixed ml-[30.5rem] space-y-4 pt-4 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden w-16 h-16 cursor-pointer">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1651088291797-e677321b7ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2OXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Random Guy"
            />
          </div>
          <div>
            <h2 className="font-semibold text-md">danilnischenko</h2>
            <h3 className="opacity-50">Daniil Onischenko</h3>
          </div>
        </div>
        <Button>Switch</Button>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="font-semibold opacity-50">Suggestions For You</h1>
        <Button blacked>See All</Button>
      </div>

      <div className='space-y-4'>
        {people.map((person: IPerson) => (
          <Person key={person.id} person={person}/>
        ))}
      </div>
    </section>
  )
}

export default Panel
