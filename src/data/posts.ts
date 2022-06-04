const posts = [
  {
    id: '1',
    username: 'Maia Habegger',
    profile:
      'https://images.unsplash.com/profile-1517999129746-0a298c444bbd?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    image:
      'https://images.unsplash.com/photo-1611526694451-21db42be4985?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nulla convallis, consectetur',
    likes: '421',
    createdAt: 'May 15, 2022',
  },
  {
    id: '2',
    username: 'Gift Habeshaw',
    profile:
      'https://images.unsplash.com/profile-1565428858497-02236d6f662e?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    image:
      'https://images.unsplash.com/photo-1597515947454-35baa6fd02bf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500',
    description: 'Nullam finibus euismod tincidunt. Proin nec vestibulum purus.',
    likes: '923',
    createdAt: 'January 2, 2022',
  },
  {
    id: '3',
    username: 'Nathan Dumlao',
    profile:
      'https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    image:
      'https://images.unsplash.com/photo-1515592614568-6b5248d804a0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500',
    description: 'Curabitur pharetra placerat tellus sed euismod.',
    likes: '122',
    createdAt: 'February 14, 2022',
  },
  {
    id: '4',
    username: 'Fotis Fotopoulos',
    profile:
      'https://images.unsplash.com/profile-1640103657219-7828a41550d4image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    image:
      'https://images.unsplash.com/photo-1652720827992-e61f56b66dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Etiam sit amet libero ut tellus ultricies porta. Etiam porttitor,',
    likes: '843',
    createdAt: 'April 8, 2022',
  },
  {
    id: '5',
    username: 'Andres Molina',
    profile:
      'https://images.unsplash.com/profile-1634678315447-cc7d48d7524fimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    image:
      'https://images.unsplash.com/photo-1652393958190-736e886a9abd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500',
    description: 'erat, scelerisque ac efficitur quis, dignissim a ante. Pellentesque non sem massa. ',
    likes: '356',
    createdAt: 'March 15, 2022',
  },
  {
    id: '6',
    username: 'Akindele Ibukun',
    profile:
      'https://images.unsplash.com/profile-1650991426483-32395ccca584?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    image:
      'https://images.unsplash.com/photo-1652437054217-4737d149fb56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Ut porttitor arcu id quam viverra sollicitudin. Donec accumsan sagittis dui.',
    likes: '976',
    createdAt: 'May 10, 2022',
  },
  {
    id: '7',
    username: 'sobhan joodi',
    profile:
      'https://images.unsplash.com/profile-1572467029170-d3bcf6ddb544image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    image:
      'https://images.unsplash.com/photo-1622651783098-cec84061b1dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0Nnx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Mauris auctor lacinia nisi, mattis rutrum risus varius eu. Curabitur eu volutpat mauris, ',
    likes: '456',
    createdAt: 'April 28, 2022',
  },
  {
    id: '8',
    username: 'mehrab zahedbeig',
    profile:
      'https://images.unsplash.com/profile-1644938304095-c7bc47210362image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    image:
      'https://images.unsplash.com/photo-1651420549140-8cecfdd0bc9c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxOXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500',
    description: 'Etiam posuere eros mi',
    likes: '724',
    createdAt: 'January 17, 2022',
  },
  {
    id: '9',
    username: 'Anton Luk',
    profile:
      'https://images.unsplash.com/profile-1651397998658-0ff9287daebbimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    image:
      'https://images.unsplash.com/photo-1651396671873-d549136d73d0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500',
    description: 'dignissim a ante. Pellentesque non sem massa. ',
    likes: '479',
    createdAt: 'May 1, 2022',
  },
  {
    id: '10',
    username: 'Mathilde Langevin',
    profile:
      'https://images.unsplash.com/profile-1601327292565-cc4c02215d36image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    image:
      'https://images.unsplash.com/photo-1651241848876-df639c406c32?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500',
    description: 'interdum interdum.',
    likes: '108',
    createdAt: 'May 23, 2022',
  },
  {
    id: '11',
    username: 'Bailey Burton',
    profile:
      'https://images.unsplash.com/profile-1639148488743-57a6a47708deimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    image:
      'https://images.unsplash.com/photo-1651192498604-68ac887962db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2M3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500',
    description: 'interdum interdum.',
    likes: '356',
    createdAt: 'January 19, 2022',
  },
  {
    id: '12',
    username: 'Brock Wegner',
    profile:
      'https://images.unsplash.com/profile-1610470233577-32a3cb94e6b8image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    image:
      'https://images.unsplash.com/photo-1650424362683-25cd36bcf967?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzNXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500',
    description:
      'Integer tempus placerat ipsum, eget tristique mi feugiat eu. Aliquam eu eleifend ipsum. Etiam sit amet libero ut tellus ultricies porta. Etiam porttitor, orci sit amet laoreet vulputate,',
    likes: '113',
    createdAt: 'March 20, 2022',
  },
]

export default posts
