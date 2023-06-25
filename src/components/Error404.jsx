import React from "react";

function ErrorPage() {
  return (
    <div className=" flex items-center justify-center">
      <div className="mt-36">
        <h1 className="font-bold text-4xl">Oops!</h1>
        <p className="font-medium text-lg">
          Sorry, an unexpected 404 error has occurred.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
