import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vector Institute',
  description: 'Where AI possibilities come to life. Remarkable in progress.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
