"use client"
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const quotes = [
  {
    id: 1,
    text: `“Don't compare your chapter 1 to someone else's chapter 20. Every expert was once a beginner. Keep going — you're growing.”`
  },
  {
    id: 2,
    text: `“Success doesn't come from what you do occasionally, it comes from what you do consistently.”`
  },
  {
    id: 3,
    text: "Mistakes are proof that you are trying. Never fear failure, fear being in the same place next year."
  }
];

const Thoughts = () => {
  const [index, setIndex] = useState(0);

  const prevQuote = () => {
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  const nextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    // <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4 text-center mb-15">
    //   <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
    //     Words to Keep You Going 💡
    //   </h2>
    //   <div className="max-w-4xl mx-auto flex flex-col items-center">
    //     <div className="relative w-full md:w-3/4 lg:w-2/3 px-8">
    //       <p className="text-xl italic text-gray-700 dark:text-gray-300">
    //        {quotes[index].text}
    //       </p>
    //       <div className="flex justify-between items-center mt-1">
    //         <button
    //           onClick={prevQuote}
    //           className="text-primary text-2xl hover:text-primary/70 transition-colors"
    //           aria-label="Previous quote"
    //         >
    //           <FaChevronLeft />
    //         </button>
    //         <button
    //           onClick={nextQuote}
    //           className="text-primary text-2xl hover:text-primary/70 transition-colors"
    //           aria-label="Next quote"
    //         >
    //           <FaChevronRight />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4 text-center mb-15">
  <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
    Words to Keep You Going 💡
  </h2>
  
  <div className="flex justify-center">
    <div className="flex items-center gap-6 w-full max-w-4xl md:w-3/4 lg:w-2/3 px-4">
      {/* Left Button */}
      <button
        onClick={prevQuote}
        className="text-primary text-2xl hover:text-primary/70 transition-colors"
        aria-label="Previous quote"
      >
        <FaChevronLeft />
      </button>

      {/* Quote Text */}
      <p className="flex-1 text-xl italic text-gray-700 dark:text-gray-300 text-center">
        {quotes[index].text}
      </p>

      {/* Right Button */}
      <button
        onClick={nextQuote}
        className="text-primary text-2xl hover:text-primary/70 transition-colors"
        aria-label="Next quote"
      >
        <FaChevronRight />
      </button>
    </div>
  </div>
</section>


  );
};

export default Thoughts;
