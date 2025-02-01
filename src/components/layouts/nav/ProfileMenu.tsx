"use client"

import React from "react"
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  Avatar,
  MenuList,
  MenuItem,
} from "@material-tailwind/react"
import {
  BookmarkIcon,
  ChevronDownIcon,
  PencilIcon,
  PowerIcon,
  UserIcon,
} from "@heroicons/react/24/solid"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const profileMenuItems = [
  {
    label: "Admin",
    icon: PencilIcon,
    path: "/admin",
    isAdmin: true,
  },
  {
    label: "Your Booking",
    icon: BookmarkIcon,
    path: "/history",
    isAdmin: false,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    isAdmin: false,
  },
]

export function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const router = useRouter()

  const onClickMenu = async (isSignOut: boolean, path?: string) => {
    if (isSignOut) {
      await signOut({ redirectTo: "/auth/signin" })
    } else {
      if (path) {
        router.push(path)
      }
    }
    setIsMenuOpen(false)
  }

  const { data: session } = useSession()
  const imageUrl = session?.user?.image

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          {imageUrl ? (
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src={imageUrl}
            />
          ) : (
            <UserIcon
              className="border border-gray-900 p-0.5 rounded-full"
              width={32}
              height={32}
            />
          )}

          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, path, isAdmin }, key) => {
          // COMMENT: isLastItem is mean signout button
          const isLastItem = key === profileMenuItems.length - 1

          if (session?.user.role !== "ADMIN" && isAdmin) {
            return null
          }

          return (
            <MenuItem
              key={label}
              onClick={() => onClickMenu(isLastItem, path)}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
