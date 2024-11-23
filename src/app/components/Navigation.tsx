import Link from 'next/link';

const Navigation = ({ currentPage }: { currentPage: string }) => {
  const isActive = (page: string) => currentPage === page;

  return (
    <nav className="fixed h-screen w-64 bg-white shadow-lg p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Menu</h2>
      <div className="flex flex-col space-y-4 mb-8">
        <Link
          href="/galleryPage"
          className={`px-4 py-2 rounded-lg flex items-center transition-colors ${
            isActive("galleryPage") ? "bg-slate-200 text-black" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          Gallery
        </Link>

        <Link
          href="/sculpturePage"
          className={`px-4 py-2 rounded-lg flex items-center transition-colors ${
            isActive("sculpturePage") ? "bg-slate-200 text-black" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          Sculptures
        </Link>

        <Link
          href="/drawsPage"
          className={`px-4 py-2 rounded-lg flex items-center transition-colors ${
            isActive("drawsPage") ? "bg-slate-200 text-black" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          Drawings
        </Link>

        <Link
          href="/"
          className={`px-4 py-2 rounded-lg flex items-center transition-colors ${
            isActive("") ? "bg-slate-200 text-black" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          Home
        </Link>
      </div>

      <div className="mt-auto">
        <h3 className="text-lg font-semibold mb-4 text-slate-800">Contact</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-slate-800 p-1.5 rounded-full">
              <div className="w-3 h-3 text-white"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800">Email</p>
              <p className="text-sm text-slate-600">artist@example.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-slate-800 p-1.5 rounded-full">
              <div className="w-3 h-3 text-white"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800">Phone</p>
              <p className="text-sm text-slate-600">+48 123 456 789</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-slate-800 p-1.5 rounded-full">
              <div className="w-3 h-3 text-white"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800">Studio</p>
              <p className="text-sm text-slate-600">123 Art Street, Warsaw</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
