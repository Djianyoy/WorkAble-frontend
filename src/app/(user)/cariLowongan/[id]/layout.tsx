import NavbarDetailLowongan from "@/shared/components/NavbarDetailLowongan";

export default function DetailLowonganLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarDetailLowongan />
      {children}
    </>
  );
}
