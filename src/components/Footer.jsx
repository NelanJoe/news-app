import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mx-4 my-6 2xl:mx-auto max-w-7xl">
      <div className="flex flex-row justify-between">
        <h2 className="font-medium">
          Follow{" "}
          <span className="italic text-gray-500">
            <Link to="https://www.linkedin.com/in/nelan17/" target="_blank">
              Nelan
            </Link>
          </span>
        </h2>
        <p>&copy;{new Date().getFullYear()} All Reverse Right.</p>
      </div>
    </footer>
  );
}
