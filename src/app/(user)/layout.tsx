import Footer from "./footer/footer";
import Header from "./header/header";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex flex-col min-h-[100vh] ">
      <Header />
      <div className="flex-1 flex">{children}</div>
      <Footer />
    </div>
  );
}
