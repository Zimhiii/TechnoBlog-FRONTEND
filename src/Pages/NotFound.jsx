import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate(); // Menggunakan useNavigate hook

  function goHome() {
    navigate("/"); // Menggunakan navigate dari hook
  }

  return (
    <div className="container mx-auto flex justify-center items-center h-screen w-full">
      <div>
        <h1 className="text-3xl font-bold">
          Error - Not Found Pages - <span className="text-red-500">404</span>
        </h1>
        <button
          onClick={goHome}
          className="bg-blue-500 text-white px-4 py-2 mt-5 rounded hover:bg-blue-600"
        >
          Go Home
        </button>{" "}
      </div>
    </div>
  );
}
