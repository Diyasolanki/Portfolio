import React from 'react'
import Image from 'next/image'

const languages = [
  {
    name: 'HTML5',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
   {
    name: 'Next.js',
    url: 'https://raw.githubusercontent.com/vercel/vercel/master/packages/frameworks/logos/next.svg'

  },
  {
    name: 'Express JS',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' ,
  },
  {
    name: 'MongoDB',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Java',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'Python',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Linux',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
    {
    name: 'Bash',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
  },
]

const Languages = () => {
  return (
    <>
     <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-8">Languages & Technologies</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {languages.map((lang, index) => (
            <div key={index} className="flex flex-col items-center group">
              <Image
                src={lang.url}
                alt={lang.name}
                width={50}
                height={50}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Languages