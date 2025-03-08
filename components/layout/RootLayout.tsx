import ThemeRegistry from '../ThemeRegistry/ThemeRegistry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Render the children directly */}
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
