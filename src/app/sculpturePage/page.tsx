import React from 'react';
import Image from 'next/image';
import { getImages } from '@/lib/api';
import Navigation from '../components/Navigation';
import { API_URL } from '../components/variables';

const GalleryPage = async () => {
  const images = await getImages();

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Navigation currentPage='sculpturePage'/>

      <main className="ml-64 flex-1">
        {/* Gallery Header */}
        <section className="bg-white py-8 px-6 shadow-sm">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-800">Gallery</h1>
            <p className="mt-2 text-slate-600">Explore the collection of original artworks</p>
          </div>
        </section>

        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            {images.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">No images available to display.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image) => (
                  <div 
                    key={image.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={`${API_URL}/${image.originalImage}`}
                        alt={image.ImageName}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-slate-800 mb-2">
                        {image.ImageName}
                      </h2>
                      <p className="text-slate-600">
                        {image.Description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default GalleryPage;