"use client"
import React from "react"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { cn } from "@/lib/utils"

interface AspectRatioProps extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {
  ratio?: number
  className?: string
  children: React.ReactNode
}

const AspectRatio = ({ 
  ratio = 16 / 9, 
  className,
  children,
  ...props 
}: AspectRatioProps) => {
  return (
    <AspectRatioPrimitive.Root
      ratio={ratio}
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </AspectRatioPrimitive.Root>
  )
}

export { AspectRatio }
