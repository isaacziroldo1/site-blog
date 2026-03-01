import Link from "next/link"

export const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
                <div className="flex h-16 items-center justify-between">
                    <Link href={'/'}>Logo</Link>
                </div>
            </div>

        </header>
    )
}