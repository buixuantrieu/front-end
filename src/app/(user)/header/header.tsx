"use client";

import { ROUTES } from "@/constants/routes";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import UserInfo from "./userInfo";

export default function Header() {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description: "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description: "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  return (
    <header className="px-8 border-b dark:border-[#6CACE4] flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Link href={ROUTES.USER.HOME}>
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={90}
            height={90}
            priority
            className="aspect-[1/1] object-cover"
          />
        </Link>
        <input className="border px-1 py-1 rounded outline-none w-[250px] focus:border-blue-400" />
        <Button variant="primary">Tìm kiếm</Button>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Kiểm tra sức khỏe</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Image
                      src="/images/BannerHelloBacsi.webp"
                      alt="banner"
                      width={100}
                      height={200}
                      className="w-full"
                    />
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Danh sách cộng đồng">
                  <div className="line-clamp-1 overflow-hidden text-ellipsis">
                    Bạn có thể nhận được sự hỗ trợ và tìm kiếm các thông tin sức khỏe đáng tin cậy tại đây.
                  </div>
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Bài viết nổi bật">
                  <div className="line-clamp-1 overflow-hidden text-ellipsis">
                    Những bài viết được chia sẻ nhiều hoặc nhận được sự tương tác lớn từ cộng đồng (lượt thích, bình
                    luận, chia sẻ) thường được coi là nổi bật
                  </div>
                </ListItem>
                <ListItem href="/docs/installation" title="Cách đặt câu hỏi để được bác sĩ trả lời nhanh nhất">
                  <div className="line-clamp-1 overflow-hidden text-ellipsis">
                    Chào cả nhà iu, khi là thành viên của cộng đồng Hello Bacsi bạn sẽ được quyền lợi hấp dẫn nhất đó là
                    hỏi bác sĩ hoàn toàn miễn phí! Nếu chưa là thành viên bạn vui lòng đăng ký
                  </div>
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Cộng đồng</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link href={ROUTES.USER.HOME}>
                      <Image
                        src="/images/BannerHelloBacsi.webp"
                        alt="banner"
                        width={100}
                        height={200}
                        className="w-full"
                      />
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Danh sách cộng đồng">
                  <div className="line-clamp-1 overflow-hidden text-ellipsis">
                    Bạn có thể nhận được sự hỗ trợ và tìm kiếm các thông tin sức khỏe đáng tin cậy tại đây.
                  </div>
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Bài viết nổi bật">
                  <div className="line-clamp-1 overflow-hidden text-ellipsis">
                    Những bài viết được chia sẻ nhiều hoặc nhận được sự tương tác lớn từ cộng đồng (lượt thích, bình
                    luận, chia sẻ) thường được coi là nổi bật
                  </div>
                </ListItem>
                <ListItem href="/docs/installation" title="Cách đặt câu hỏi để được bác sĩ trả lời nhanh nhất">
                  <div className="line-clamp-1 overflow-hidden text-ellipsis">
                    Chào cả nhà iu, khi là thành viên của cộng đồng Hello Bacsi bạn sẽ được quyền lợi hấp dẫn nhất đó là
                    hỏi bác sĩ hoàn toàn miễn phí! Nếu chưa là thành viên bạn vui lòng đăng ký
                  </div>
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Chuyên khoa</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <UserInfo />
    </header>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
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
            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
