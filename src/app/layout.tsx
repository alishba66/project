
import "./globals.css";
import { Poppins} from 'next/font/google';
import Footer from '@/components/Footer'
const poppins = Poppins({
   subsets: ['latin'],
   display: 'swap',
   weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});


export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased bg-[#0F1724] text-white`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
