'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigaion () {
    const param = usePathname();
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {param === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {param === "/about-us" ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    )
}