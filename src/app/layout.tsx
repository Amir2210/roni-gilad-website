import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'רוני גלעד | ניהול סושיאל ושיווק דיגיטלי',
  description: 'ניהול סושיאל אסטרטגי שחוסך לכם זמן יקר, בונה מותג חזק ומביא לקוחות מדויקים לעסק שלכם, כל יום מחדש.',
  keywords: 'ניהול סושיאל, רוני גלעד, שיווק עסק, שיווק רשתי, מנהלת סושיאל',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
