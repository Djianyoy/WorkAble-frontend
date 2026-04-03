import SideBarSmartProfile from "@/feature/_user/smartProfile/container/SideBarSmartProfile";
import NavLogin from "@/shared/components/NavLogin";

export default function SmartProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavLogin />
      <SideBarSmartProfile/>
      {children}
    </>
  );
}
