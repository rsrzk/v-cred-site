import { Menu } from "@/types/menu";

export const unauthenticatedMenuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  /*{
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },*/
  {
    id: 4,
    title: "Sign in",
    path: "/signin",
    newTab: false,
  },
];

export const authenticatedMenuData: Menu[] = [
  {
    id: 5,
    title: "Dashboard",
    path: "/dashboard",
    newTab: false,
  },
  {
    id: 6,
    title: "Admin",
    path: "/admin",
    newTab: false,
  },
  {
    id: 7,
    title: "Profile",
    path: "/profile",
    newTab: false,
  },
];