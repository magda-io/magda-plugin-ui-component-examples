import { ConfigType } from "./magdaCommon";

export const user = {
    id: "",
    displayName: "Anonymous User",
    email: "",
    photoURL: "",
    source: "",
    sourceId: "",
    isAdmin: false,
    roles: [
        {
            id: "00000000-0000-0001-0000-000000000000",
            name: "Anonymous Users",
            description: "Default role for unauthenticated users",
            permissionIds: [
                "4b9d6d06-1d7f-4bc6-8d9f-f7daad9ff1bb",
                "e5ce2fc4-9f38-4f52-8190-b770ed2074e6"
            ]
        }
    ],
    permissions: [
        {
            id: "4b9d6d06-1d7f-4bc6-8d9f-f7daad9ff1bb",
            name: "Read Registry Record",
            resourceId: "2755d096-0cfa-4c59-b49b-89b5f864b1a0",
            resourceUri: "registry/record",
            userOwnershipConstraint: false,
            orgUnitOwnershipConstraint: false,
            preAuthorisedConstraint: false,
            operations: [
                {
                    id: "ba433331-d66c-420f-9a67-8510353f7110",
                    uri: "object/registry/record/read",
                    name: "Read registry record/aspect"
                }
            ]
        },
        {
            id: "e5ce2fc4-9f38-4f52-8190-b770ed2074e6",
            name: "View Published Dataset",
            resourceId: "de6ed699-9f44-4433-b4a8-814fb82a9a5c",
            resourceUri: "object/dataset/published",
            userOwnershipConstraint: false,
            orgUnitOwnershipConstraint: false,
            preAuthorisedConstraint: false,
            operations: [
                {
                    id: "8c39dc64-c8f7-4436-be13-f7f34425a072",
                    uri: "object/dataset/published/read",
                    name: "Read Publish Dataset"
                }
            ]
        }
    ],
    orgUnit: null,
    managingOrgUnitIds: []
};

export const headerNavItems = [
    {
        order: 0,
        default: {
            label: "Organisations",
            href: "/organisations"
        }
    },
    {
        default: {
            label: "Datasets",
            href: "/search"
        },
        order: 1
    },
    {
        order: 2,
        default: {
            label: "About",
            href: "/page/about"
        }
    },
    {
        default: {
            label: "Add a Dataset",
            href: "/dataset/add"
        },
        order: 3
    },
    {
        auth: {},
        order: 4
    }
];

export const footerCopyRightItems = [
    {
        order: 999,
        logoSrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAKCAYAAAD2Fg1xAAAAI0lEQVR42u3PAREAMAgAoTe50bceHjRgXm0HjIiIiIiIiEh9iR0O99ylthgAAAAASUVORK5CYII=",
        href: "http://magda.io",
        htmlContent: "New Copyright"
    }
];

export const footerMediumNavs = [
    {
        order: 20,
        label: "Developers",
        links: [
            {
                order: 10,
                label: "API Documentation",
                href: "/api/v0/apidocs/index.html"
            },
            {
                order: 20,
                label: "Powered by Magda",
                href: "https://magda.io"
            }
        ]
    },
    {
        order: 10,
        label: "Magda",
        links: [
            {
                order: 10,
                label: "About",
                href: "page/about"
            },
            {
                order: 20,
                label: "Suggest a dataset",
                href: "suggest"
            },
            {
                order: 30,
                label: "Privacy Policy",
                href: "page/privacy-policy"
            }
        ]
    }
];

export const footerSmallNavs = [
    {
        order: 10,
        label: "Magda",
        links: [
            {
                order: 10,
                label: "About",
                href: "page/about"
            },
            {
                order: 20,
                label: "Suggest a dataset",
                href: "suggest"
            }
        ]
    }
];

export const config: ConfigType = {
    credentialsFetchOptions: {
        credentials: "include"
    },
    showNotificationBanner: false,
    baseUrl: "https://dev.magda.io/",
    baseExternalUrl: "https://dev.magda.io/",
    uiBaseUrl: "/",
    authPluginRedirectUrl: "/sign-in-redirect",
    contentApiURL: "https://dev.magda.io/api/v0/content/",
    searchApiUrl: "https://dev.magda.io/api/v0/search/",
    registryReadOnlyApiUrl: "https://dev.magda.io/api/v0/registry-read-only/",
    registryFullApiUrl: "https://dev.magda.io/api/v0/registry/",
    adminApiUrl: "https://dev.magda.io/api/v0/admin/",
    authApiUrl: "https://dev.magda.io/api/v0/auth/",
    correspondenceApiUrl: "https://dev.magda.io/api/v0/correspondence/",
    storageApiUrl: "https://dev.magda.io/api/v0/storage/",
    previewMapUrl: "https://dev.magda.io/preview-map/",
    proxyUrl: "https://dev.magda.io/preview-map/proxy/",
    rssUrl:
        "https://dev.magda.io/preview-map/proxy/_0d/https://blog.data.gov.au/blogs/rss.xml",
    disableAuthenticationFeatures: false,
    breakpoints: {
        small: 768,
        medium: 992,
        large: 1200
    },
    facets: [
        {
            id: "publisher",
            showExplanation: true,
            name: "Organisation"
        },
        {
            id: "region"
        },
        {
            id: "format"
        },
        {
            id: "temporal"
        }
    ],
    headerLogoUrl: "https://dev.magda.io/api/v0/content/header/logo",
    headerMobileLogoUrl:
        "https://dev.magda.io/api/v0/content/header/logo-mobile",
    contentUrl:
        "https://dev.magda.io/api/v0/content/all?id=home/*&id=footer/*&id=config/*&id=header/*&inline=true",
    months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    boundingBox: {
        west: 105,
        south: -45,
        east: 155,
        north: -5
    },
    gapiIds: [],
    featureFlags: {
        cataloguing: true,
        publishToDga: true,
        previewAddDataset: false,
        placeholderWorkflowsOn: false,
        datasetApprovalWorkflowOn: false,
        useStorageApi: true
    },
    vocabularyApiEndpoints: [
        "https://vocabs.ands.org.au/repository/api/lda/abares/australian-land-use-and-management-classification/version-8/concept.json",
        "https://vocabs.ands.org.au/repository/api/lda/ands-nc/controlled-vocabulary-for-resource-type-genres/version-1-1/concept.json"
    ],
    custodianOrgLevel: 2,
    automaticPreviewMaxFileSize: 2097152,
    mandatoryFields: [
        "dataset.title",
        "dataset.description",
        "dataset.defaultLicense",
        "distributions.title",
        "distributions.format",
        "distributions.license",
        "dataset.publisher",
        "licenseLevel",
        "dataset.defaultLicense",
        "informationSecurity.classification",
        "informationSecurity.disseminationLimits",
        "publishToDga"
    ],
    dateConfig: {
        dateFormats: [
            "YYYY",
            "YYYY-MM",
            "DD-MM-YYYY",
            "MM-DD-YYYY",
            "YYYY-MM-DD",
            "YYYY-MM-DDThh:mmTZD",
            "YYYY-MM-DDThh:mm:ssTZD",
            "YYYY-MM-DDThh:mm:ss.sTZD",
            "DD-MMM-YYYY",
            "MMM-DD-YYYY"
        ],
        dateRegexes: {
            dateRegex: /.*(date|dt|year|decade).*/i,
            startDateRegex: /(start|st).*(date|dt|year|decade)/i,
            endDateRegex: /(end).*(date|dt|year|decade)/i
        }
    },
    datasetThemes: [],
    noManualKeywords: false,
    noManualThemes: false,
    keywordsBlackList: [
        "Mr",
        "Ms",
        "Mrs",
        "Miss",
        "Dr",
        "Hon",
        "Jr",
        "Prof",
        "Sr",
        "St",
        "Mr.",
        "Ms.",
        "Mrs.",
        "Miss.",
        "Dr.",
        "Hon.",
        "Jr.",
        "Prof.",
        "Sr.",
        "St."
    ],
    openfaasBaseUrl: "https://dev.magda.io/api/v0/openfaas/",
    ckanExportServers: {
        "https://demo.ckan.org": true
    },
    defaultCkanServer: "https://demo.ckan.org"
};
