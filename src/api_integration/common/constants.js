// Authentication
export const ACCESS_TOKEN = "access_token";
export const REFRESH_TOKEN = "refresh_token";
export const USER_DATA = "user";

// User Roles
export const USER_ROLES = {
  ADMIN: "admin",
  CUSTOMER: "customer",
  AGENT: "agent",
};

// Status
export const STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  PENDING: "pending",
  BLOCKED: "blocked",
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

// Pagination
export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 10;

// Date Format
export const DATE_FORMAT = "DD-MM-YYYY";
export const DATE_TIME_FORMAT = "DD-MM-YYYY HH:mm:ss";

// App
export const APP_NAME = "BotBridge";
export const APP_VERSION = "1.0.0";