function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-rubik relative h-screen w-screen bg-radial from-teal-300 from-20% to-teal-200">
      {/* PATTERN TILE */}
      <div className="animate-pan mask-repeat-[repeat] absolute inset-0 bg-teal-50 mask-[url('/pattern-tile.svg')] mask-size-[100px] opacity-20" />

      {/* CONTENT */}
      <div className="relative z-20 flex h-full w-full items-center justify-center overflow-hidden md:p-4">
        {children}
      </div>
    </div>
  );
}

export default Container;
