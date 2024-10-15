export default function LoadingCards() {
  return (
    <div className="grid gap-8 animate-pulse">
      <header className="grid gap-2">
        <div className="bg-neutral-500/10 h-8 mb-2 w-1/4"></div>
        <div className="bg-neutral-500/10 h-8 mb-2 w-1/5"></div>
      </header>
      <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[...Array(10)].map((i: any, key: number) => (
          <div
            key={key}
            className="bg-neutral-500/10 w-full h-[300px] rounded"
          />
        ))}
      </div>
    </div>
  );
}

export const LoadingCardsLarge = () => {
  return (
    <div className="grid gap-8 animate-wave">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((i: any, key: number) => (
          <div
            key={key}
            className="bg-neutral-500/10 w-full h-[300px] rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};
