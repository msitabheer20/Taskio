import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full  md:pt-0 bg-slate-100">
      <Navbar />
      <main className="pt-10 bg-[#F3F3F5]">
      {children}
      </main>
      <Footer/>
    </div>
  );
}

export default MarketingLayout;