import { NextPage } from 'next';
import Link from 'next/link';

const NotFoundPage: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl text-gray-700">
          Sorry, the page you are looking for doesn&apos;t exist.
        </p>
        <p className="mt-4">
          <Link href="/">
            <span className="text-blue-500 hover:underline">
              Go back to homepage
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
