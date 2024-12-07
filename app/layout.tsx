import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from '@/components/ui/sonner';
import '@liveblocks/react-ui/styles.css';
import '@liveblocks/react-tiptap/styles.css';
import './globals.css';
import { ConvexClientProvider } from '@/components/convext-provider';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Google Docs | Candra',
    template: '%s - Google Docs | Candra',
  },
  description: 'Buat dokumen anda di platform kami',
  category: 'Dokumen, PDF, HTML',
  authors: { name: 'BMMK' },
  keywords: ['Document', 'HTML', 'Word', 'PDF', 'platform Tulis'],
  creator: 'Candra Wali Sanjaya',
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} antialiased`}>
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster />
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
