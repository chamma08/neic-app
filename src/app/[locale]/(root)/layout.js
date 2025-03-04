import { Bottombar, Footer, Navbar, Topbar } from "@/components";

export default async function RootLayout({ children }) {
  return (
    <div className="flex h-screen flex-col">
      <Topbar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Bottombar />
    </div>
  );
}
