import { ComponentType } from "react";
import { ConfigType, User, Role } from "./magdaCommon";

export type ExternalCompontType<PropsType> = ComponentType<
    PropsType & { config: ConfigType }
>;

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

type HeaderComponentProps = {
    isFetchingWhoAmI: boolean;
    user: User;
    whoAmIError: Error | null;
    headerNavItems: HeaderNavItem[];
};

export type HeaderComponentType = ExternalCompontType<HeaderComponentProps>;

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

type FooterComponentPropsType = {
    isFetchingWhoAmI: boolean;
    user: User;
    whoAmIError: Error | null;
    noTopMargin: boolean;
    footerMediumNavs: FooterNavLinkGroup[];
    footerSmallNavs: FooterNavLinkGroup[];
    footerCopyRightItems: CopyRightItem[];
};

export type FooterComponentType = ExternalCompontType<FooterComponentPropsType>;
