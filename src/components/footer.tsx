import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="absolute bottom-0 left-0 right-0 flex justify-center items-center p-4 md:p-5 max-w-5xl mx-auto z-10">
        <div className="flex flex-col items-center pt-4">
          <p className="text-sm text-gray-500 italic">
            &copy; Copyright 2025 AutoCal
          </p>
          <p className="text-sm text-gray-500 italic">All rights reserved</p>
          <p className="text-sm text-gray-500 italic">
            Made with ❤️ by CTO of AutoCal -{" "}
            <Link
              to="https://www.linkedin.com/in/fanyi-charllson-ab19492b8/"
              className="text-green-700 underline cursor-pointer text-sm"
            >
              Fanyi Charllson
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
