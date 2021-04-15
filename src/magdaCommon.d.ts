interface DateConfig {
    dateFormats: string[];
    dateRegexes: {
        dateRegex: RegExp;
        startDateRegex: RegExp;
        endDateRegex: RegExp;
    };
}

export type ConfigType = {
    authApiBaseUrl?: string;
    baseUrl?: string;
    authPluginRedirectUrl?: string;
    baseExternalUrl?: string;
    uiBaseUrl?: string;
    showNotificationBanner?: boolean;
    contentApiBaseUrl?: string;
    previewMapBaseUrl?: string;
    registryApiBaseUrl?: string;
    registryApiReadOnlyBaseUrl?: string;
    searchApiBaseUrl?: string;
    correspondenceApiBaseUrl?: string;
    storageApiBaseUrl?: string;
    gapiIds?: Array<string>;
    adminApiBaseUrl?: string;
    disableAuthenticationFeatures?: boolean;
    fallbackUrl?: string;
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
    defultCkanServer: string;
    defaultTimeZone?: string;
    enableCrawlerViews?: boolean;
    discourseSiteUrl?: string;
    discourseIntegrationDatasetPage?: boolean;
    discourseIntegrationDistributionPage?: boolean;
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