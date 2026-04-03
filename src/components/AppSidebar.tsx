import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Home, BookOpen, Award, Layers, Users, ClipboardList, Wrench, GraduationCap } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

export default function AppSidebar() {
  const { t } = useTranslation();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const kidItems = [
    { to: "/lessons", label: t("nav.lessons"), icon: BookOpen },
    { to: "/badges", label: t("nav.badges"), icon: Award },
    { to: "/block-flashcards", label: t("nav.flashcards"), icon: Layers },
  ];

  const parentItems = [
    { to: "/parents", label: t("nav.parentGuide"), icon: Users },
    { to: "/lesson-scripts", label: t("nav.lessonScripts"), icon: ClipboardList },
    { to: "/parent-resources", label: t("nav.resources"), icon: Wrench },
  ];

  const kidsOpen = kidItems.some((i) => isActive(i.to));
  const parentsOpen = parentItems.some((i) => isActive(i.to));

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {/* Home */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/" end className="hover:bg-sidebar-accent" activeClassName="bg-sidebar-accent text-primary font-semibold">
                    <Home className="mr-2 h-4 w-4" />
                    {!collapsed && <span>{t("nav.home")}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* For Kids */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <GraduationCap className="mr-2 h-4 w-4" />
            {!collapsed && t("nav.forKids")}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {kidItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.to} className="hover:bg-sidebar-accent" activeClassName="bg-sidebar-accent text-primary font-semibold">
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.label}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* For Parents */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <Users className="mr-2 h-4 w-4" />
            {!collapsed && t("nav.forParents")}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {parentItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.to} className="hover:bg-sidebar-accent" activeClassName="bg-sidebar-accent text-primary font-semibold">
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.label}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        {!collapsed && <LanguageSwitcher />}
      </SidebarFooter>
    </Sidebar>
  );
}
