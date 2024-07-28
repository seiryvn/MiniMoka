"use client"

import * as React from "react"
import Link from "next/link"
import { AiOutlineHome } from "react-icons/ai";
import { cn } from "@/lib/utils"
import { IoMdFlower } from "react-icons/io";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components = [
  {
    title: "Sanrio",
    href: "/docs/primitives/alert-dialog",
    description:
      "Join Hello Kitty & Friends on their friendship adventures!",
  },
  {
    title: "Precious Moments",
    href: "/docs/primitives/hover-card",
    description:
      "Cherish every moment with Precious Moment's beautiful porcelain figures!",
  },
  {
    title: "Rilakkuma",
    href: "/docs/primitives/progress",
    description:
      "Rilakkuma: The lazy bears where cuteness meets comfort!",
  },
  {
    title: "Sylvanian Families",
    href: "/docs/primitives/scroll-area",
    description: "Bring home the enchantment and warmth of the Sylvanian Families!",
  },
  {
    title: "Sumikko Gurashi",
    href: "/docs/primitives/scroll-area",
    description: "Embrace the cozy charms of Sumikko Gurashi!",
  },
  {
    title: "Littlest Pet Shop",
    href: "/docs/primitives/scroll-area",
    description: "Adopt joy with the Littlest Pet Shop friends!",
  },
]

const collections = [
  {
    title: 'Food Collection',
    href: '/docs',
    description: 'Filling your yummy food cravings combined with cuteness!',
  },
  {
    title: 'Best Friends Collection',
    href: '/docs',
    description: 'Plushies and figures that strengthen the bonds of friendships!'
  }
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
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Check Out Our Newest Addition: <span className="text-rose-400">Sumikko Gurashi!</span>
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
              <ListItem href="/docs/installation" title="Food Collection">
                Filling your cravings combined with cuteness!
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Keychains">
                A collection of bag & charm accessories.
              </ListItem>                
                
              </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* THREE */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">Brands!</NavigationMenuTrigger>
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
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">Collections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {collections.map((collections) => (
                <ListItem
                  key={collections.title}
                  title={collections.title}
                  href={collections.href}
                >
                  {collections.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* FIVE */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex flex-row gap-1 justify-center align-middle items-center text-lg">
              <span className="text-rose-400 flex flex-row gap-1 items-center">Sale!<IoMdFlower /></span>
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


// 'use client'
// import React from 'react'
// import LinkButton from '../my-components/LinkButton'
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuIndicator,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     NavigationMenuViewport,
//   } from "@/components/ui/navigation-menu"
  
  
// export default function NavMenu() {
//   return (
//     <>
//     <div className="flex flex-row gap-[5px]">
//     <LinkButton title="Home"/>
//       <NavigationMenu className="text-zinc-800">
//         <NavigationMenuList>
//           {/* Item Two */}
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="text-lg">New!</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <NavigationMenuLink>Link</NavigationMenuLink>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//           {/* Item Three */}
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="text-lg">Figurines</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <NavigationMenuLink>Link</NavigationMenuLink>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//           {/* Item Four */}
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="text-lg">Plushies</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <NavigationMenuLink>Link</NavigationMenuLink>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//           {/* Item Five */}
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="text-lg">Collections</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <NavigationMenuLink>Link</NavigationMenuLink>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//           {/* End */}
//         </NavigationMenuList>


//       </NavigationMenu>
//     </div>
//     </>
    
//   )
// }
