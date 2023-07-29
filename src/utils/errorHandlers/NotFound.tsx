import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const Navigate = useNavigate();
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-orange-600 font-semibold">404 Error</h3>
          <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Page not found
          </p>
          <p className="text-gray-600">
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                Navigate(-1);
              }}
              className="block py-2 px-4 text-white font-medium bg-orange-600 duration-150 hover:bg-orange-500 active:bg-orange-700 rounded-lg"
            >
              Go back
            </button>
            <a
              href="mailto:company@gmail.com"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
