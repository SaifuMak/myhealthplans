import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});



export const metadata = {
  title: "My Health Plans",
  description: "Insurance Policies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className={`font-poppins  antialiased`}
      >
          <Toaster position="bottom-right" richColors />
        {children}
      </body>
    </html>
  );
}
