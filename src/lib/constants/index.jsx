import dayjs from "dayjs";
import { MENUS } from "@/lib/constants/menu";
import { ROLES } from "@/lib/constants/roles";
import { NRC_DATA } from "@/lib/constants/nrcData";

export const CURRENT_DATE = dayjs(new Date()).format("YYYY-MM-DD");
export const DATE_FORMAT = "YYYY-MM-DD";
export const DATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
export const MAX_FILE_SIZE = 1 * 1024 * 1024;
export const IMAGE_UPLOAD_FORMATS = ".png, .jpg, .jpeg, .webp";
export const IMAGE_UPLOAD_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png", "image/webp"];
export const BULK_UPLOAD_FILE_FORMATS = `.csv`;
export const DEBOUNCE_TIME = 500;
export const BULK_UPLOAD_FILE_MIME_TYPES = [
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
  "text/comma-separated-values",
  "application/csv",
  "text/csv",
];
export const PASSPORT_REGEX = /^(?!^0+$)[a-zA-Z0-9]{3,20}$/
export const NRC_REGEX = /^([0-9]{1,2}\/[a-zA-Z]{6,8}\([A-Z]{1}\)[0-9]{6})$/

export const STATUS_OPTIONS = [
  {
    id: 1,
    value: "active",
    label: "Active",
  },
  {
    id: 2,
    value: "inactive",
    label: "Inactive",
  },
];

export const KYC_LEVEL = [
  { id: 1, value: 0, label: "Level 1" },
  { id: 2, value: 1, label: "Level 2" },
  { id: 3, value: 2, label: "Level 3" },
];

export const ACCOUNT_STATUS = [
  { id: 1, value: "pending", label: "Pending" },
  { id: 2, value: "active", label: "Active" },
  { id: 3, value: "frozen", label: "Frozen" },
  { id: 4, value: "suspended", label: "Suspended" },
  { id: 5, value: "blacklist", label: "Blacklist" },
  { id: 6, value: "locked", label: "Locked" },
];

export const OTC_KYC_STATUS = [
  { id: 1, value: "", label: "All" },
  { id: 2, value: "pending_approval", label: "Pending Approval" },
  { id: 3, value: "auto_approved", label: "Auto Approved" },
  { id: 4, value: "accepted", label: " Approved" },
  { id: 5, value: "auto_rejected", label: "Auto Rejected" },
  { id: 6, value: "rejected", label: " Rejected" },
  { id: 7, value: "otc_verified", label: "Verified" },
  { id: 8, value: "otc_unverified", label: "Unverified" },
  { id: 9, value: "pending_recommendation", label: "Pending Recommendation" },
  { id: 10, value: "recommend_to_approve", label: "Recommend to Approve" },
  { id: 11, value: "recommend_to_reject", label: "Recommend to Reject" },
];

export const SUBSCRIBER_KYC_STATUS = [
  { id: 1, value: "", label: "All" },
  { id: 2, value: "not_submitted", label: "Not submitted" },
  { id: 3, value: "pending_approval", label: "Pending approval" },
  { id: 4, value: "pending_recommendation", label: "Recommend to approve" },
  { id: 5, value: "recommend_to_reject", label: "Recommend to reject" },
  { id: 6, value: "approved", label: " Approved" },
  { id: 7, value: "rejected", label: " Rejected" },
];

export const ID_TYPES = [
  { id: 1, value: "N", label: "N" },
  { id: 2, value: "T", label: "T" },
  { id: 3, value: "C", label: "C" },
];

export const POI_TYPES = [
  { id: 1, value: "nrc", label: "NRC" },
  { id: 2, value: "passport", label: "Passport" },
];

export const PRIMARY_POI_TYPES = [
  { id: 1, value: "nrc", label: "NRC" },
  { id: 2, value: "passport", label: "Passport" },
];

export const RESTRICTION_TYPES = [
  { id: 1, value: "black_list", label: "Blacklisted" },
  { id: 2, value: "watch_list", label: "Watchlisted" },
];

export const UPDATE_REQUIRED = [
  { id: 1, value: 'true', label: "Yes" },
  { id: 2, value: 'false', label: "No" },
];

export const SECONDARY_POI_TYPES = [
  { id: 1, value: "driving_license", label: "Driving License" },
  { id: 2, value: "pension_book", label: "Pension Book" },
  { id: 3, value: "monk_card", label: "Monk Card" },
  { id: 4, value: "social_security_card", label: "Social Security Card" },
  { id: 4, value: "others", label: "Others" },
];

export const GENDERS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "others", label: "Others" },
];

export const REASON_TYPES = [
  { id: 1, value: "acceptance", label: "Acceptance" },
  { id: 2, value: "rejection", label: "Rejection" },
  { id: 3, value: "modification", label: "Modification" },
  { id: 4, value: "account_onboard", label: "Onboard" },
  { id: 5, value: "account_deboard", label: "Deboard" },
];

export const WALLET_TYPES = [{ id: 1, value: "pos_account", label: "POS Account" }];

export const WALLET_LEVEL = [
  { id: 1, value: 0, label: "Level 1" },
  { id: 2, value: 1, label: "Level 2" },
];

export const AGENT_CATEGORY = [
  { id: 1, value: "subscriber", label: "Subscriber" },
  { id: 2, value: "biller", label: "Biller" },
  { id: 3, value: "merchant", label: "Merchant" },
  { id: 4, value: "dtr", label: "DTR" },
  { id: 5, value: "pos", label: "POS" },
  { id: 6, value: "case", label: "Case" },
  { id: 7, value: "cre", label: "CRE" },
  { id: 8, value: "fofo", label: "FOFO" },

]
export const BULK_TYPES = [
  { id: 1, value: "creation", label: "Profiles Creation" },
  { id: 2, value: "edit", label: "Profiles Update" },
];

export const BULK_STATUS = [
  { id: 1, value: "pending", label: "Pending" },
  { id: 2, value: "processing", label: "Processing" },
  { id: 3, value: "finished", label: "Finished" },
  { id: 4, value: "failed", label: "Failed" },
  { id: 5, value: "rejected", label: "Rejected" },
];

export const DATE_RANGE_TYPE = [
  { id: 1, value: "creation_date", label: "Creation Date" },
  { id: 2, value: "modified_date", label: "Modified Date" },
];

export const ACCEPTANCE_DECISION = [
  { id: 1, value: "manual", label: "Manual" },
  { id: 2, value: "auto_approved", label: "Auto Approved" },
  { id: 3, value: "auto_rejected", label: "Auto Rejected" },
];
export const ACCEPTANCE_DECISION_FOR_APPROVED = [
  { id: 1, value: "manual", label: "Manual" },
  { id: 2, value: "auto_approved", label: "Auto Approved" },
];
export const ACCEPTANCE_DECISION_FOR_REJECTION = [
  { id: 1, value: "manual", label: "Manual" },
  { id: 2, value: "auto_rejected", label: "Auto Rejected" },
];
export const REPORT_TYPES = [
  {
    id: 1,
    link: "kyc-pending-reports",
    title: "KYC Pending Reports (OTC)",
    customer_type: "otc",
  },
  {
    id: 2,
    link: "kyc-pending-reports",
    title: "KYC Pending Reports (Subscriber)",
    customer_type: "subscriber",
  },
  {
    id: 3,
    link: "kyc-approval-reports",
    title: "KYC Approval Reports (OTC)",
    customer_type: "otc",
  },
  {
    id: 4,
    link: "kyc-approval-reports",
    title: "KYC Approval Reports (Subscriber)",
    customer_type: "subscriber",
  },
  {
    id: 5,
    link: "kyc-rejection-reports",
    title: "KYC Rejection Reports (OTC)",
    customer_type: "otc",
  },

  {
    id: 6,
    link: "kyc-rejection-reports",
    title: "KYC Rejection Reports (Subscriber)",
    customer_type: "subscriber",
  },
  {
    id: 7,
    link: "kyc-mobile-ac-reports",
    title: "KYC Mobile Account Reports (OTC)",
    customer_type: "otc",
  },
  {
    id: 7,
    link: "kyc-mobile-ac-reports",
    title: "KYC Mobile Account Reports (Subscriber)",
    customer_type: "subscriber",
  },
  {
    id: 8,
    link: "kyc-otc-reports",
    title: "KYC OTC Reports",
    customer_type: "otc",
  },
  {
    id: 9,
    link: "kyc-status-summary-reports",
    title: "KYC Status Summary Reports (OTC)",
    customer_type: "otc",
  },
  {
    id: 10,
    link: "kyc-status-summary-reports",
    title: "KYC Status Summary Reports (Subscriber)",
    customer_type: "subscriber",
  },
];

export { MENUS, ROLES, NRC_DATA };
