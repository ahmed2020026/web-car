import React, { useEffect } from "react"

interface TypeSome {
    btn:React.RefObject<HTMLButtonElement|null>,
    ref: React.RefObject<HTMLElement|null>,
    func: () => void
}
export const useClickOut = ({btn,ref , func}:TypeSome) => {
    useEffect(() => {
        const handleClickOutSide = (e:MouseEvent) => {
            if(ref.current && !ref.current?.contains(e.target as Node) && !btn.current?.contains(e.target as Node)){
                func()
            }
        }
        document.addEventListener("mousedown", handleClickOutSide);
        return () => document.removeEventListener("mousedown", handleClickOutSide);
    },[ref,func])
}