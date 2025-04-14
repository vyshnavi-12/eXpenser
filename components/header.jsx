import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const Header = async() => {
    await checkUser();

    return (
        <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
            <nav className="flex items-center justify-between py-4">
                <Link href="/" className="ml-4">
                    <Image
                        src={"/expenser-logo.png"}
                        alt="Welth Logo"
                        width={400}  
                        height={90}  
                        className="h-20 w-auto object-contain"  
                    />
                </Link>

                <div className="flex items-center space-x-4 mr-4">
                    <SignedIn>
                        <Link
                            href="/dashboard"
                            className="text-[#303045] hover:text-[#d1d1d6] flex items-center gap-2"
                        >
                            <Button
                                variant="outline"
                                className="border-[#303045] hover:border-[#303045] text-[#303045]"
                            >
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>
                        </Link>

                        <Link
                            href="/transaction/create"
                            className="text-gray-600 flex items-center gap-2"
                        >
                            <Button className="flex items-center gap-2 text-[#e68687] hover:text-[#f4d6d6] bg-[#303045] hover:bg-[#49495b]">
                                <PenBox size={18} />
                                <span className="hidden md:inline">Add Transaction</span>
                            </Button>
                        </Link>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-12 h-12 border-2 border-[#303045]",
                                },
                            }}
                        />
                    </SignedIn>
                </div>
            </nav>
        </div>
    )
}

export default Header