const isAbsoluteUrl = (value) => /^https?:\/\//i.test(value);

const normalizeLocalAbsoluteUrl = (value) => {
  try {
    const url = new URL(value);
    if (/localhost|127\.0\.0\.1/.test(url.hostname)) {
      if (url.port === "3000" || url.port === "5173") {
        url.port = "5000";
        return url.toString();
      }
    }
  } catch (error) {
    return value;
  }

  return value;
};

const getDefaultBaseUrl = () => {
  if (typeof window === "undefined") {
    return "";
  }

  const origin = window.location.origin;

  if (/localhost|127\.0\.0\.1/.test(origin)) {
    if (origin.includes(":3000")) {
      return origin.replace(":3000", ":5000");
    }

    if (origin.includes(":5173")) {
      return origin.replace(":5173", ":5000");
    }
  }

  return origin;
};

export const resolveAssetUrl = (value) => {
  if (!value) {
    return "";
  }

  if (isAbsoluteUrl(value)) {
    return normalizeLocalAbsoluteUrl(value);
  }

  const baseUrl = import.meta.env.VITE_API_BASE_URL || getDefaultBaseUrl();

  if (!baseUrl) {
    return value.startsWith("/") ? value : `/${value}`;
  }

  if (value.startsWith("/")) {
    return `${baseUrl}${value}`;
  }

  return `${baseUrl}/${value}`;
};

export default resolveAssetUrl;
