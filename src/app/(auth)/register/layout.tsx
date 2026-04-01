import AuthLayout from "@/shared/components/AuthLayout";

export default function RegisterLayout({
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