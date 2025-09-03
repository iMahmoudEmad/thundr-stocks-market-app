export const Footer = () => {
  return (
    <footer className="flex items-center justify-center h-[84px] bg-white border-t border-gray-200 gap-2">
      Build with ❤️ for
      <a
        href="https://thundr.com/"
        className="flex items-center gap-1 text-md hover:underline"
        target="_blank"
      >
        <img
          src="assets/thundr.svg"
          alt="Thundr Logo"
          style={{
            borderRadius: "0.125rem",
            background: "#fbc700",
            fill: "#733e0a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "32px",
          }}
        />
        <span>Thundr</span>
      </a>
    </footer>
  );
};
