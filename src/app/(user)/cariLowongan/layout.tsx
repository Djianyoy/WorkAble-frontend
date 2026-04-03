import NavLogin from "@/shared/components/NavLogin";

export default function CariLowonganLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavLogin />
      {children}
    </>
  );
}
