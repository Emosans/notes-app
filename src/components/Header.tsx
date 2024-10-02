interface Header {
  onClick: () => void;
}

function Header({ onClick }: Header) {
  return (
    <div className="shadow-xl h-28 w-full">
      <div className="flex flex-row justify-between px-10">
        <div className="text-3xl font-bold flex flex-col justify-center h-28">
          Notes App
        </div>
        <div className="flex flex-row justify-center gap-4">
          <div className="font-semibold text-1xl flex flex-col justify-center">
            <button
              className="btn btn-primary border-2 p-2 bg-blue-400 rounded-md"
              onClick={onClick}
            >
              Create New Note
            </button>
          </div>
          <div className="font-semibold text-1xl flex flex-col justify-center">
            <button className="btn btn-primary border-2 p-2 bg-blue-400 rounded-md">
              View Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
