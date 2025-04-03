import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";
import { navbarLinks } from "@/constants/index";
import logoMika from "@/assets/logo_mika.svg?url";
import logoDark from "@/assets/logo-dark.svg?url";

import PropTypes from "prop-types";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
    return (
        <aside
            ref={ref}
            className={cn([
                "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white",
                "[transition:width_300ms_cubic-bezier(0.4,0,0.2,1),left_300ms_cubic-bezier(0.4,0,0.2,1),background-color_150ms_cubic-bezier(0.4,0,0.2,1),border_150ms_cubic-bezier(0.4,0,0.2,1)]",
                "dark:border-slate-700 dark:bg-slate-900",
                collapsed ? "max-w-[70px] md:items-center" : "md:w-[240px]",

                collapsed ? "max-md:left-full" : "max-md:left-0",
            ])}
        >
            <div className="flex gap-x-3 p-3">
                <img
                    src={logoMika}
                    alt="logoipsum"
                    className="w-[100px] dark:hidden"
                />
                <img
                    src={logoDark}
                    alt="logoipsum"
                    className="hidden w-[100px] dark:block"
                />
                {!collapsed && <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50"></p>}
            </div>
            <div className="[scrollbar-width:_thin flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3">
                {navbarLinks.map((navbarLink) => (
                    <nav
                        key={navbarLink.title}
                        className={cn("sidebar-group", collapsed && "md:items-center")}
                    >
                        <p className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}>{navbarLink.title}</p>
                        {navbarLink.links.map((link) => (
                            <NavLink
                                key={link.label}
                                to={link.path}
                                end
                                className={cn("sidebar-item", collapsed && "md:w-[45px]")}
                            >
                                <link.icon
                                    size={22}
                                    className="flex-shrink-0"
                                />
                                {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
                            </NavLink>
                        ))}
                    </nav>
                ))}
            </div>
        </aside>
    );
});

Sidebar.displayName = "Sidebar";
Sidebar.propTypes = {
    collapsed: PropTypes.bool,
};
