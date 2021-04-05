import { ComponentType } from "react";

export type Role = {
    id: string;
    name: string;
    description: string;
    permissionIds: string[];
};

export type User = {
    id: string;
    displayName: string;
    email: string;
    photoURL: string;
    source: string;
    isAdmin: boolean;
    roles: Role[];
    permissions: any[];
    orgUnitId?: string;
};

type HeaderNavItem = {
    default?: {
        href: string;
        label: string;
        rel?: string;
        target?: string;
    };
    auth?: {};
    order: number;
};

export type HeaderComponent = ComponentType<{
    isFetchingWhoAmI: boolean;
    user: User;
    whoAmIError: Error | null;
    headerNavItems: HeaderNavItem[];
}>;

type CopyRightItem = {
    href: string;
    htmlContent: string;
    logoSrc: string;
    order: number;
};

type FooterNavLink = {
    href: string;
    label: string;
    order: number;
};

type FooterNavLinkGroup = {
    label: string;
    links: FooterNavLink[];
    order: number;
};

export type FooterComponent = ComponentType<{
    isFetchingWhoAmI: boolean;
    user: User;
    whoAmIError: Error | null;
    noTopMargin: boolean;
    footerMediumNavs: FooterNavLinkGroup[];
    footerSmallNavs: FooterNavLinkGroup[];
    footerCopyRightItems: CopyRightItem[];
}>;
