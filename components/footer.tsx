import Link from "next/link"
import { Github, Linkedin, Twitter, MessageCircle, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Aklile Ansa. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <Link href="https://github.com/Aklile612" target="_blank" aria-label="GitHub">
              <Github className="w-5 h-5 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/aklile-ansa-691a73336/" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" />
            </Link>
            {/* <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" />
            </Link> */}
            <Link href="https://t.me/Remb0727" target="_blank" aria-label="Telegram">
              <MessageCircle className="w-5 h-5 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" />
            </Link>
            {/* <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
              <Youtube className="w-5 h-5 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" />
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
