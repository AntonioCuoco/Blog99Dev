export default function AboutLayout({ children }) {
  return (
    //TODO: fare una retrieve article universale per ogni retrieve article particolare che faccio e impostarla come utils e settare con redux
    <main className="w-full flex flex-col items-center justify-between">
      {children}
    </main>
  );
}
