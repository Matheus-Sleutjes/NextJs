import { ReactNode } from "react";
import Sidebar from "../../shared/sidebar/page";

export const metadata = {
  title: "Dashboard",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body>
        <div className="layout">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}