'use client'

import Link from 'next/link'
import { useTheme } from '@/hooks/useTheme'
import { useAuth } from '@/context/AuthContext'
import { CircleUserRound, Menu, Moon, Sun, Brain } from 'lucide-react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Header() {
  const { user, logout } = useAuth()
  const [theme, toggleTheme] = useTheme()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const isLoggedIn = !!user

  // Handle scroll to section when URL has hash
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace('#', '')
      scrollToSection(id)
    }
  }, [pathname, searchParams])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const header = document.querySelector('header')
      const headerHeight = header?.clientHeight || 0
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          </div>
          <Link
            href="/"
            className="text-xl font-bold whitespace-nowrap text-blue-600 dark:text-blue-400 sm:text-2xl hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            DSYNTHETIC
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link 
            href="#about"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                scrollToSection('about')
              }
            }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link 
            href="#services"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                scrollToSection('services')
              }
            }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Services
          </Link>
          <Link 
            href="#process"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                scrollToSection('process')
              }
            }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Our Process
          </Link>
          <Link 
            href="#blogs"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                scrollToSection('blogs')
              }
            }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Blogs
          </Link>
          <Link 
            href="#pricing"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                scrollToSection('pricing')
              }
            }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Pricing
          </Link>
          
          <Link 
            href="#contact"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                scrollToSection('contact')
              }
            }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Right Section - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatarUrl ?? '/placeholder-user.jpg'} alt="User Avatar" />
                    <AvatarFallback>
                      <CircleUserRound className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={logout}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/auth/signin">
                <Button variant="outline" size="sm" className="bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button - Only shows on mobile */}
        <div className="toggle flex md:hidden ml-20">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-auto">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] sm:w-[300px] p-6 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col gap-6 pt-8">
                {/* Theme Toggle in Mobile Menu */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-5 h-5 text-yellow-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 text-gray-700" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>

                <Link href="/" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
                <Link 
                  href="#about"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('about')
                    }
                  }}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="#services"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('services')
                    }
                  }}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
                <Link 
                  href="#process"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('process')
                    }
                  }}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Our Process
                </Link>
                <Link 
                  href="#pricing"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('pricing')
                    }
                  }}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Pricing
                </Link>
                <Link 
                  href="#blogs"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('blogs')
                    }
                  }}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Blogs
                </Link>
                <Link 
                  href="#contact"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('contact')
                    }
                  }}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
                
                {isLoggedIn ? (
                  <>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-full justify-start p-0 h-auto">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatarUrl ?? '/placeholder-user.jpg'} alt="User Avatar" />
                              <AvatarFallback>
                                <CircleUserRound className="h-5 w-5" />
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-lg">{user.name}</span>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56" align="start" forceMount>
                        <DropdownMenuLabel className="font-normal">
                          <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{user.name}</p>
                            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                          </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer" onClick={logout}>Log out</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/auth/signin" 
                      className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link 
                      href="/auth/signup" 
                      className="text-lg text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}