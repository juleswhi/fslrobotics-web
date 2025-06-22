export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Friends' School Lisburn Robotics",
  description: "FSL Robotics page",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Links",
      href: "/links",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/Friends-Robotics",
  },
};
