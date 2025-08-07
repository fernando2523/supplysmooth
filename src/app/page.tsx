"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type PropsWithChildren = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline";
};

function Button({
  children,
  className = "",
  variant = "default",
}: PropsWithChildren) {
  const base = "px-4 py-2 rounded text-sm font-medium transition";
  const variants = {
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    default: "bg-black text-white hover:bg-gray-800",
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.default
        } ${className}`}
    >
      {children}
    </button>
  );
}

function Card({
  children,
  className = "",
}: Omit<PropsWithChildren, "variant">) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function CardContent({
  children,
  className = "",
}: Omit<PropsWithChildren, "variant">) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className=" bg-green-700 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center">
          <h1 className="text-xl text-white font-bold">SUPPLYSMOOTH</h1>
          {/* <nav className="space-x-4 hidden md:flex">
            <a href="#" className="hover:underline">
              Beranda
            </a>
            <a href="#" className="hover:underline">
              Produk
            </a>
            <a href="#" className="hover:underline">
              Tentang
            </a>
            <a href="#" className="hover:underline">
              Kontak
            </a>
          </nav> */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b">
        <div className="max-h-[600px] overflow-hidden">
          <Image
            src={`/banner1.webp`}
            alt="Produk"
            width={5000}
            height={5000}
            className="w-full "
          />
        </div>
        <div className="container mx-auto px-4 text-center py-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Satisfaction Guaranteed
          </h2>
          <p className="text-lg text-gray-600">
            Quality guaranteed. Your satisfaction, our promise
          </p>
          {/* <Button className="text-white bg-black hover:bg-gray-800">
            Lihat Koleksi
          </Button> */}
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Best Products
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            <Card className="overflow-hidden">
              <Image
                src={`/1.png`}
                alt="Produk"
                width={500}
                height={500}
                className="w-full object-cover"
              />
              <CardContent>
                <h4 className="font-semibold text-lg mb-2">Worldwide Space White</h4>
                <Link href="https://shopee.co.id/supplysmooth">
                  <Button variant="outline">Shop Now</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src={`/2.png`}
                alt="Produk"
                width={500}
                height={500}
                className="w-full object-cover"
              />
              <CardContent>
                <h4 className="font-semibold text-lg mb-2">Worldwide Space Black</h4>
                <Link href="https://shopee.co.id/supplysmooth">
                  <Button variant="outline">Shop Now</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src={`/3.png`}
                alt="Produk"
                width={500}
                height={500}
                className="w-full object-cover"
              />
              <CardContent>
                <h4 className="font-semibold text-lg mb-2">Never Settle</h4>
                <Link href="https://shopee.co.id/supplysmooth">
                  <Button variant="outline">Shop Now</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src={`/4.png`}
                alt="Produk"
                width={500}
                height={500}
                className="w-full object-cover"
              />
              <CardContent>
                <h4 className="font-semibold text-lg mb-2">She's Running Out</h4>
                <Link href="https://shopee.co.id/supplysmooth">
                  <Button variant="outline">Shop Now</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            New Arrival
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden">
                <Image
                  src={`/${item}.webp`}
                  alt="Produk"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <CardContent>
                  <h4 className="font-semibold text-lg mb-2">
                    Hot Product {item}
                  </h4>
                  <Link href="https://shopee.co.id/supplysmooth">
                    <Button variant="outline">Shop Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* <div className="mb-6">
            <Image
              src="/logo-gudangbubu.png"
              alt="Logo"
              width={180}
              height={60}
              className="mx-auto"
            />
          </div> */}
          <p className="mb-3">
            Established in January 2020, <strong>Supplysmooth</strong> is the
            best hype sneakers & apparels shop with the 'lowest' price, but the{" "}
            <strong>'HIGHEST'</strong> quality!
          </p>
          <p className="mb-6">
            Please contact us through the links provided below.{" "}
            <strong>24/7 Fast Respond guarantee!</strong>
          </p>

          <div className="mb-4 text-sm space-x-6">
            <a href="#" className="hover:underline">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:underline">
              REFUND AND RETURNS POLICY
            </a>
          </div>

          <div className="text-xs mt-4">
            &copy; Copyright 2025 Supplysmooth – All Rights Reserved
          </div>
        </div>
      </footer>
    </main>
  );
}
