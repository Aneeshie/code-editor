import EdtiorPanel from "./_components/EdtiorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-2-[100px] mx-auto p-4">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EdtiorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
