"use client";

import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { orderChannelLabel, orderUrl } from "@/lib/site-content";

type CtaLinkProps = Omit<React.ComponentPropsWithoutRef<"a">, "href"> &
  VariantProps<typeof buttonVariants> & {
    source: string;
    showIcon?: boolean;
  };

export function CtaLink({
  children,
  className,
  rel,
  source,
  showIcon = true,
  size = "default",
  target = "_blank",
  variant = "default",
  onClick,
  ...props
}: CtaLinkProps) {
  return (
    <a
      href={orderUrl}
      target={target}
      rel={target === "_blank" ? rel ?? "noreferrer" : rel}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented) {
          return;
        }

        const analyticsWindow = window as Window & {
          gtag?: (...args: unknown[]) => void;
        };

        analyticsWindow.gtag?.("event", "order_click", {
          event_category: "engagement",
          event_label: source,
          order_channel: orderChannelLabel,
        });
      }}
      className={cn(
        buttonVariants({ size, variant }),
        "h-11 rounded-full px-5 text-sm font-semibold tracking-[-0.01em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_-20px_rgba(15,23,42,0.28)]",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showIcon ? <ArrowUpRight className="size-4 opacity-80" /> : null}
    </a>
  );
}
