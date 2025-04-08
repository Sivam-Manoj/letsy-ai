
"use client"; // Only this component runs on the client

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hiddenPaths = ["/sign-in", "/sign-up", "/verify","/updatepassword"];

  return !hiddenPaths.includes(pathname) ? <Navbar /> : null;
}
