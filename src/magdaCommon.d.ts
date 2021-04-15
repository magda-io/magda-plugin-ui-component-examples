interface DateConfig {
    dateFormats: string[];
    dateRegexes: {
        dateRegex: RegExp;
        startDateRegex: RegExp;
        endDateRegex: RegExp;
    };
}

export type ConfigType = {
    image?: {
        pullPolicy?: string;
        repository?: string;
        tag?: string;
    };
    credentialsFetchOptions?: {
        credentials?: string;
    };
    authApiUrl?: string;
    baseUrl?: string;
    authPluginRedirectUrl?: string;
    baseExternalUrl?: string;
    uiBaseUrl?: string;
    showNotificationBanner?: boolean;
    contentApiURL?: string;
    previewMapUrl?: string;
    registryFullApiUrl?: string;
    registryReadOnlyApiUrl?: string;
    searchApiUrl?: string;
    correspondenceApiUrl?: string;
    storageApiUrl?: string;
    gapiIds?: Array<string>;
    adminApiUrl?: string;
    proxyUrl?: string;
    rssUrl?: string;
    disableAuthenticationFeatures?: boolean;
    fallbackUrl?: string;
    breakpoints?: {
        small: number;
        medium: number;
        large: number;
    };
    facets?: {
        id: string;
        showExplanation?: boolean;
        name?: string;
    }[];
    headerLogoUrl?: string;
    headerMobileLogoUrl?: string;
    contentUrl?: string;
    months?: string[];
    boundingBox?: {
        west: number;
        south: number;
        east: number;
        north: number;
    };
    featureFlags?: {
        [id: string]: boolean;
    };
    vocabularyApiEndpoints: string[];
    defaultOrganizationId?: string;
    defaultContactEmail?: string;
    custodianOrgLevel: number;
    automaticPreviewMaxFileSize: number;
    mandatoryFields: string[];
    dateConfig?: DateConfig;
    noManualKeywords?: boolean;
    noManualThemes?: boolean;
    datasetThemes?: string[];
    keywordsBlackList?: string[];
    openfaasBaseUrl?: string;
    ckanExportServers: {
        [ckanServerUrl: string]: boolean;
    };
    defaultTimeZone?: string;
    enableCrawlerViews?: boolean;
    discourseSiteUrl?: string;
    discourseIntegrationDatasetPage?: boolean;
    discourseIntegrationDistributionPage?: boolean;
    defaultCkanServer?: string;
};

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
