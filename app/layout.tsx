import '../styles/globals.css';

export const metadata = {
  title: 'HR Dashboard',
  description: 'Track and manage employee performance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
