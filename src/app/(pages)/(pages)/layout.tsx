import Footer from "@/components/footer";
import Header from "@/components/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="before-header">
      </div>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
