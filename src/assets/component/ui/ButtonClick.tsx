import { forwardRef } from "react"
import { Button } from "@headlessui/react"

type ButtonProps = {
    children: React.ReactNode
    ClassName?: string
    onClick?: () => void
    ariaLabel?: string
    type?: "button" | "submit" | "reset"
}

const ButtonClick = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ClassName='bg-gray-700 data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 text-white', onClick, ariaLabel, type = "button" }, ref) => {
    return (
        <Button
            ref={ref}
            type={type}
            aria-label={ariaLabel}
            onClick={onClick}
            className={`inline-flex transition-all cursor-pointer items-center gap-2 rounded-md ${ClassName} px-3 py-1.5 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline`}
        >
            {children}
        </Button>
    )
})

export default ButtonClick