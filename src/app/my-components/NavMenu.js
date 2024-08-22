"use client"

import * as React from "react"
import Link from "next/link"
import { AiOutlineHome } from "react-icons/ai";
import { cn } from "@/src/lib/utils"
import { IoMdFlower } from "react-icons/io";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"

const components = [
  {
    title: "Skull Panda",
    href: "/docs/skull",
    description:
      "Elevate your collection with the iconic Skull Panda figurines.",
  },
  {
    title: "Hirono",
    href: "/docs/hirono",
    description:
      "Hirono figurines: Where artistry meets charm.",
  },
  {
    title: "Nanci",
    href: "/docs/nanci",
    description: "Mixing traditional artistry, beauty is captured with Nanci.",
  },
  {
    title: "Precious Moments",
    href: "/docs/precious",
    description: "Precious Moments: Little reminders of love and happiness.",
  },
  {
    title: "Azura",
    href: "/docs/azura",
    description: "Elevate your display with the enchanting Azura series.",
  },
]

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* ONE */}
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex flex-row gap-1 justify-center align-middle items-center text-lg">
              <AiOutlineHome/>Home
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs/all" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex flex-row gap-1 justify-center align-middle items-center text-lg">
              Shop All
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* TWO */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">New!</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">

              {/* HUGE PHOTO LINK */}
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/docs/azura"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Check Out Our Newest Addition: <span className="text-stone-500">Azura!</span>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {/* SMALLER TAB LINKS */}
              
              <ListItem href="/docs" title="Shop All New!">
                Explore all of our new items in store.
              </ListItem>
              {/* <ListItem href="/docs/food" title="Food Collection">
                Filling your cravings combined with cuteness!
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Keychains">
                A collection of bag & charm accessories.
              </ListItem>                 */}
                
              </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* THREE */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">Figurines</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* FOUR */}
        
        {/* FIVE */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex flex-row gap-1 justify-center align-middle items-center text-lg">
              <span className="text-stone-500 flex flex-row gap-1 items-center">Sale!<IoMdFlower /></span>
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* END */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"