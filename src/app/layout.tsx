import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@/providers/query-client-provider";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ["vietnamese"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "Medical Schedule",
  description: "Design By Xuan Trieu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <QueryClientProvider>
          <Toaster position="top-right" />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
