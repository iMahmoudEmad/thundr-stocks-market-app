export const Error = ({ refetch }: { refetch: () => void }) => (
  <div className="min-h-screen flex flex-col justify-between items-center bg-white">
    <div className="flex-1 flex flex-col items-center w-full justify-center">
      <h1 className="text-3xl font-bold text-red-600 mb-2">
        Something went wrong
      </h1>
      <p className="text-gray-700 text-lg">Please try again later.</p>
      <button
        onClick={refetch}
        className="mt-6 px-4 cursor-pointer py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Refetch Page
      </button>
    </div>
  </div>
);
