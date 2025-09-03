export const EmptyState = ({ refetch }: { refetch: () => void }) => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-white">
    <h1 className="text-3xl font-bold text-gray-400 mb-2">No data to show</h1>
    <button
      onClick={refetch}
      className="mt-6 px-4 cursor-pointer py-2 bg-gray-200 text-black rounded hover:bg-gray-700 hover:text-white transition"
    >
      Refetch Page
    </button>
  </div>
);
