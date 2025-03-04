import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../Providers";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NEIC",
  description: "National Environmental Information Centre",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>
          <div>
            <AuthProvider>{children}</AuthProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
