'use client'
import { useState } from 'react'

const educationData = [
  {
    title: 'Bachelor of Engineering - VGEC',
    location: 'Gujarat, India',
    date: '2024 - 2027',
    description: 'Pursuing BE in Computer Science.',
    icon: '🎓',
  },
    {
    title: 'Diploma - Goverment Polytechnic Jamnagar',
    location: 'Gujarat, India',
    date: '2021 - 2024',
    description: 'Computer Science.',
    icon: '🎓',
  },
  {
    title: 'Class 1 to 10 - Shree Mad Dayanand Kanya Vidhyalaya',
    location: 'Gujarat, India',
    date: 'Completed in 2021',
    description: 'Basic Subjects.',
    icon: '🎓',
  },
];

const experienceData = [
  {
    title: 'Python With Django - Brainy Beam',
    location: 'Ahmedabad - Online',
    date: '2022',
    description: 'Worked with Python with django project.',
    icon: '💼',
  },
  {
    title: 'Web Development With React',
    location: 'Ahmedabad - Online',
    date: '2023',
    description: 'Worked with React and HTML, CSS, JS to build UI.',
    icon: '💼',
  },
];

export default function Education() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('experience');

  return (
    <section className="py-16 bg-white dark:bg-gray-900 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education & Experience</h2>

        {/* Toggle buttons for small screens */}
        <div className="md:hidden flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'experience'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'education'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'
            }`}
          >
            Education
          </button>
        </div>

        {/* Two Column Layout for md+ */}
        <div className="hidden md:grid grid-cols-2 gap-12">
          {/* Left: Experience */}
          <div className="relative border-l-4 border-primary pl-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Experience</h3>
            {experienceData.map((item, idx) => (
              <div key={idx} className="mb-10">
                <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full ring-8 ring-white dark:ring-gray-900">
                  {item.icon}
                </span>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white ml-1">
                  {item.title}
                </h4>
                <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.location} • {item.date}
                </span>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right: Education */}
          <div className="relative border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Education</h3>
            {educationData.map((item, idx) => (
              <div key={idx} className="mb-10">
                <span className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full ring-8 ring-white dark:ring-gray-900">
                  {item.icon}
                </span>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.location} • {item.date}
                </span>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Toggle Based */}
        <div className="md:hidden">
          <div className="relative border-l-4 border-primary pl-6">
            {(activeTab === 'experience' ? experienceData : educationData).map((item, idx) => (
              <div key={idx} className="mb-10">
                <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full ring-8 ring-white dark:ring-gray-900">
                  {item.icon}
                </span>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white ml-1">
                  {item.title}
                </h4>
                <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.location} • {item.date}
                </span>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
