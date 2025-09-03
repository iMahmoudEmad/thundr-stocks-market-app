export const SplashScreen = () => (
  <div className="min-h-screen flex flex-col justify-between items-center bg-white">
    <div className="flex-1 flex items-center w-full justify-center">
      <img
        src="assets/logo.svg"
        alt="Nasdaq Logo"
        className="w-75 h-auto animate-bounce px-4"
      />
    </div>
    <footer className="w-full text-center py-6 text-lg text-gray-500 tracking-wider">
      Developed by{" "}
      <a
        href="https://mahmoud-emad.vercel.app/"
        target="_blank"
        className="underline hover:text-blue-600 transition"
      >
        Mahmoud Emad Eldin
      </a>
    </footer>
  </div>
);
