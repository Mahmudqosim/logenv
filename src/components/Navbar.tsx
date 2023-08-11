import Link from "next/link"
import { LogInIcon, HomeIcon, MessageCircle, SearchIcon } from "lucide-react"
import { Icons } from "./Icons"
import { buttonVariants } from "./ui/Button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const session = {}

  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-white border-b border-gray-200 z-[10] py-4">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logosmall className="block md:hidden h-8 w-auto" />
          <Icons.logo className="hidden md:block h-8 w-auto" />
        </Link>

        <div className="space-x-2 overflow-x-auto">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "rounded-full gap-2"
            )}
          >
            <HomeIcon className="h-4 w-auto" />
            {/* Home */}
          </Link>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full gap-2"
            )}
          >
            <SearchIcon className="h-4 w-auto" />
            Search
          </Link>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full gap-2"
            )}
          >
            <MessageCircle className="h-4 w-auto" />
            Chats
          </Link>
        </div>

        {session ? (
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <Link
            href="/signin"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full bg-gray-50"
            )}
          >
            Sign In
            <LogInIcon className="ml-2 h-4 w-auto" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
