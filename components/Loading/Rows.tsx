export default function LoadingRows({ row = 8 }: { row?: number }) {
  return (
    <div className="grid gap-2 rounded-lg">
      {[...Array(row)].map((i: any, key: number) => (
        <div key={key} className="bg-white h-12 w-full" />
      ))}
    </div>
  );
}
