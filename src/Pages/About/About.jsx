import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Our News
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted source for accurate, unbiased, and timely news.
          </p>
        </div>


        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105">
              <div className="flex-shrink-0">
                <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.835 5.47 9.208 5 7.5 5 4.417 5 2 7.239 2 10s2.417 5 5.5 5c1.708 0 3.335-.47 4.5-1.253M12 6.253C13.165 5.47 14.792 5 16.5 5 19.583 5 22 7.239 22 10s-2.417 5-5.5 5c-1.708 0-3.335-.47-4.5-1.253" />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-xl leading-6 font-medium text-gray-900">Our Mission</h3>
                <p className="mt-2 text-base text-gray-500">
                  To empower our readers with reliable information and insightful analysis on the issues that matter most. We believe in the power of journalism to foster a more informed and engaged society.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105">
              <div className="flex-shrink-0">
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-xl leading-6 font-medium text-gray-900">Our Values</h3>
                <p className="mt-2 text-base text-gray-500">
                  We are committed to **Integrity**, **Accuracy**, and **Transparency**. Every story is meticulously fact-checked, and we hold ourselves accountable to the highest standards of journalistic ethics.
                </p>
              </div>
            </div>

        
            <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105">
              <div className="flex-shrink-0">
                <svg className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-xl leading-6 font-medium text-gray-900">Our Vision</h3>
                <p className="mt-2 text-base text-gray-500">
                  To be the leading digital news platform, setting the benchmark for quality journalism and innovative storytelling in a constantly evolving media landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;