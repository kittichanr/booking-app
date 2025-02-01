"use client"

import React from "react"
import { Navbar, Typography } from "@material-tailwind/react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { ProfileMenu } from "./ProfileMenu"

export function Nav() {
  const pathName = usePathname()
  if (pathName.startsWith("/auth")) return null

  return (
    <Navbar className="mx-auto max-w-full px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            Material Tailwind
          </Typography>
        </Link>
        <div className="flex items-center gap-x-1">
          <ProfileMenu />
        </div>
      </div>
    </Navbar>
  )
}
