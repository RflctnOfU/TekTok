import { LogOut, Home, MessageCircle, ScrollText, Plus } from "lucide-react";

export const linkData = [
  { link: "Home", href: "/dashboard", icon: Home },
  { link: "Posts", href: "/dashboard/posts", icon: ScrollText },
  { link: "Comments", href: "/dashboard/comments", icon: MessageCircle },
  { link: "New Post", href: "/dashboard/posts/create", icon: Plus },
  { link: "LogOut", href: "/api/auth/signout", icon: LogOut },
];
