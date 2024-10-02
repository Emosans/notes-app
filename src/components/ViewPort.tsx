function ViewPort() {
  return (
    <div className="flex flex-row justify-center mt-52 gap-32">
      <div className="flex flex-col w-72 justify-center">
        <h1 className="w-42 h-32 font-bold text-2xl">Your simple Notes App</h1>
        <p className="text-lg">
          Stay organized and productive with Notes App, a simple and
          intuitive note-taking app designed to capture your ideas, thoughts,
          and tasks effortlessly. Whether you're a student, a professional, or
          just someone who loves jotting down ideas, our app is built to help
          you stay on top of everything.
        </p>
      </div>
      <img
        src="./src/assets/notes.jpeg"
        className="w-100 h-100 rounded-xl"
      ></img>
    </div>
  );
}

export default ViewPort;
