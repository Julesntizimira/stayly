import Footer from "@/components/footer";
import Header from "@/components/header";
import HorizontalDivider from "@/components/horizontalDivider";

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
      <HorizontalDivider />
      <Footer />
    </>
  );
}
