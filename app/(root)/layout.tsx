import Navbar from "../componets/Navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}
