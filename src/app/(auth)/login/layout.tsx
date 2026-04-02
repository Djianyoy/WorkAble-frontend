import AuthLayout from "@/shared/components/AuthLayout";

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    )
}