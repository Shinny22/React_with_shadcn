import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "tailwindcss.config.jsinline-flex tailwindcss.config.jsitems-center tailwindcss.config.jsjustify-center tailwindcss.config.jswhitespace-nowrap tailwindcss.config.jsrounded-md tailwindcss.config.jstext-sm tailwindcss.config.jsfont-medium tailwindcss.config.jsring-offset-background tailwindcss.config.jstransition-colors focus-visible:tailwindcss.config.jsoutline-none focus-visible:tailwindcss.config.jsring-2 focus-visible:tailwindcss.config.jsring-ring focus-visible:tailwindcss.config.jsring-offset-2 disabled:tailwindcss.config.jspointer-events-none disabled:tailwindcss.config.jsopacity-50",
  {
    variants: {
      variant: {
        default: "tailwindcss.config.jsbg-primary tailwindcss.config.jstext-primary-foreground hover:tailwindcss.config.jsbg-primary/90",
        destructive:
          "tailwindcss.config.jsbg-destructive tailwindcss.config.jstext-destructive-foreground hover:tailwindcss.config.jsbg-destructive/90",
        outline:
          "tailwindcss.config.jsborder tailwindcss.config.jsborder-input tailwindcss.config.jsbg-background hover:tailwindcss.config.jsbg-accent hover:tailwindcss.config.jstext-accent-foreground",
        secondary:
          "tailwindcss.config.jsbg-secondary tailwindcss.config.jstext-secondary-foreground hover:tailwindcss.config.jsbg-secondary/80",
        ghost: "hover:tailwindcss.config.jsbg-accent hover:tailwindcss.config.jstext-accent-foreground",
        link: "tailwindcss.config.jstext-primary tailwindcss.config.jsunderline-offset-4 hover:tailwindcss.config.jsunderline",
      },
      size: {
        default: "tailwindcss.config.jsh-10 tailwindcss.config.jspx-4 tailwindcss.config.jspy-2",
        sm: "tailwindcss.config.jsh-9 tailwindcss.config.jsrounded-md tailwindcss.config.jspx-3",
        lg: "tailwindcss.config.jsh-11 tailwindcss.config.jsrounded-md tailwindcss.config.jspx-8",
        icon: "tailwindcss.config.jsh-10 tailwindcss.config.jsw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
