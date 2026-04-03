import NavOnboarding from "@/shared/components/NavbarOnboarding";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavOnboarding />
      {children}
    </>
  );
}
