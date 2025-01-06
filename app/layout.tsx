import '@/app/components/global.css';
import { inter } from '@/app/components/fonts';
import TopNav from './components/topnav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
          <div className="w-full overflow-hidden">
            <TopNav />
          </div>
          <div className="w-full p-2 bg-gray-300">
              {children}
          </div>
      </body>
    </html>
  );
}
