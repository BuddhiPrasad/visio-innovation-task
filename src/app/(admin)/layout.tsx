import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/app/(admin)/_components/header";
import "./styles.css";
import Sidebar from "./_components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col">
            <Header />
            <div className="flex h-screen overflow-hidden">
              <Sidebar />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
