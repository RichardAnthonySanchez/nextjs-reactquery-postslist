import Providers from '@lib/query/provider'
import React from "react"

export const metadata = {
  title: "Blog Archive",
  description: "Using Nextjs and React Query",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
