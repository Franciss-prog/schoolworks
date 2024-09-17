import { useRef } from "react"

export const scrollTo  = <T extends HTMLDivElement>() => {
    // ref
    const elementRef =  useRef<T | null>(null);

    // function to scroll to element
    const scrollToElement = () => {
        if (elementRef.current) {
            elementRef.current.scrollIntoView({
                behavior: "smooth", // Add smooth scrolling
            })
        }
    }

    return {elementRef,  scrollToElement}
}