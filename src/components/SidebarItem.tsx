"use client";

import React from "react";
import Image from "next/image";
import { Activity, Layout, Users } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Organization } from "@/interfaces";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const SidebarItem = ({ org }: { org: Organization }) => {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organizations/${org.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `/organizations/${org.id}/activity`,
    },
    {
      label: "Members",
      icon: <Users className="h-4 w-4 mr-2" />,
      href: `/organizations/${org.id}/members`,
    },
  ];

  return (
    <AccordionItem value={org?.id} className="border-none">
      <AccordionTrigger>
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={org?.image?.split("|")[1] || ""}
              alt={org?.title}
              className="rounded-sm object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <span className="font-medium text-sm">{org?.title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="">
        {routes?.map((route) => (
          <Button
            key={route.href}
            onClick={() => router.push(route.href)}
            className={cn(
              "w-full font-normal justify-start pl-10 mb-1",
              pathname == route.href && "bg-sky-500/10 text-sky-700"
            )}
            variant="ghost"
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default SidebarItem;
