import { ComponentType } from "react";
import { ConfigType, User, Role } from "./magdaCommon";

interface CommonPropsType {
    isFetchingWhoAmI: boolean;
    user: User;
    whoAmIError: Error | null;
    config: ConfigType;
    history: History;
    location: Location;
    match: any;
    requestSignOut: () => Promise<void>;
    requestWhoAmI: () => Promise<void>;
    fetchContent: () => Promise<void>;
}

export type ExternalCompontType<T> = ComponentType<T & CommonPropsType>;

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
    noTopMargin: boolean;
    footerMediumNavs: FooterNavLinkGroup[];
    footerSmallNavs: FooterNavLinkGroup[];
    footerCopyRightItems: CopyRightItem[];
};

export type FooterComponentType = ExternalCompontType<FooterComponentPropsType>;

type DatasetEditButtonComponentPropsType = {
    dataset: ParsedDataset;
};

export type DatasetEditButtonCompontType =
    ExternalCompontType<DatasetEditButtonComponentPropsType>;

type DatasetLikeButtonComponentPropsType = {
    dataset: ParsedDataset;
};

export type DatasetLikeButtonCompontType =
    ExternalCompontType<DatasetLikeButtonComponentPropsType>;

type ExtraVisualisationSectionComponentPropsType = {
    dataset: ParsedDataset;
    distributionId?: string;
};

export type ExtraVisualisationSectionComponentType =
    ExternalCompontType<ExtraVisualisationSectionComponentPropsType>;
