import React from 'react';
import Navigation from './components/Navigation';

const MainPage = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Navigation currentPage=''/>

      {/* Main Content */}
      <main className="ml-64 flex-1">
        {/* Hero Section */}
        <section className="relative h-96 bg-slate-800 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Jan Kowalski</h1>
            <p className="text-xl text-slate-300">Contemporary Visual Artist</p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">About the Artist</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-slate-700">
                  [Artist biography and background]
                </p>
                <p className="text-slate-700">
                  [Artists style and inspiration]
                </p>
              </div>
              <div className="bg-slate-100 rounded-lg">
                <div className="w-full h-64 bg-slate-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Exhibitions Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">Recent Exhibitions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((exhibition) => (
                <div key={exhibition} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">Exhibition {exhibition}</h3>
                  <p className="text-slate-600">
                    [Exhibition details, dates, and location]
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">Awards & Recognition</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((award) => (
                <div key={award} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                  <div className="bg-slate-800 p-2 rounded-full">
                    <div className="w-4 h-4 text-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-800">Award Title {award}</h3>
                    <p className="text-slate-600">
                      [Award description and year received]
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;