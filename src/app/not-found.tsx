import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-8xl font-oswald font-extrabold text-accent mb-4">404</h1>
      <h2 className="text-3xl font-oswald font-bold uppercase mb-4">Page Not Found</h2>
      <p className="text-gray-400 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved. 
        Don't lose your pump, let's get you back to the library.
      </p>
      <Link href="/" className="bg-accent text-background px-8 py-3 rounded-md font-bold hover:bg-[#aacc00] transition-colors">
        RETURN TO WORKOUTS
      </Link>
    </div>
  );
}
