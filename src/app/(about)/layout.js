import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "1 anno di esperienza",
    "frontend developer",
    "3 progetti completati",
    "mi piace mettermi alla sfida, confrontandomi ogni giorno con nuove sfide"
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
