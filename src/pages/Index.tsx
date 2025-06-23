import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import DocumentManagement from "@/components/DocumentManagement";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Activities />
      <DocumentManagement />
      <Leadership />
      <Footer />
    </div>
  );
};

export default Index;
