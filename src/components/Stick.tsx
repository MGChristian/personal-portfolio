function Stick() {
  return (
    <>
      {/* MAIN STICK */}
      <div className="absolute top-1/2 left-1/2 h-screen w-10 -translate-x-1/2 border-3 border-stone-800 bg-yellow-600"></div>
      {/* SHADOW */}
      <div className="absolute top-1/2 right-1/2 -z-10 h-screen w-10 translate-x-3 bg-stone-800/60"></div>
    </>
  );
}

export default Stick;
