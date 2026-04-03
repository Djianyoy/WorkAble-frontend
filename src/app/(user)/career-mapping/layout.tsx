import NavbarCareerMapping from "@/shared/components/NavbarCareerMapping";

export default function CareerMappingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarCareerMapping />
      {children}
    </>
  );
}
