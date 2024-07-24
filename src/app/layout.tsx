import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { DMSerifText, inter, monofet, saira, tangerine } from "@/fonts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Thư viện điện tử tỉnh Vĩnh Phúc",
  description: "Số hóa thư viện",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${monofet.variable} ${DMSerifText.variable} font-sans`}
      >
        <Header />
        <AntdRegistry>
          <div className="bg-bgColorMain">
            <div className=" pb-[30px]">{children}</div>
          </div>
        </AntdRegistry>
        <Footer />
      </body>
    </html>
  );
}
