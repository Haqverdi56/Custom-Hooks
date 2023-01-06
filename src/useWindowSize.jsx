import React, { useEffect, useState } from "react";

const size = typeof window !== "undefined";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState({
        width: size ? 1200 : window.innerWidth,
        height: size ? 800 : window.innerHeight,
    });

    if(typeof window !== "undefined") {
        return { width: 1200, height: 800}
    }

    function getSize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    
    useEffect(() => {
        window.addEventListener("resize", getSize)
        return () => {
            window.removeEventListener("resize", getSize)
        }
    }, [])
    
    return windowSize
}