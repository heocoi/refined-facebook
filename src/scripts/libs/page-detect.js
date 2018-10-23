// Drops leading and trailing slash to avoid /\/?/ everywhere
export const getCleanPathname = () =>
  location.pathname.replace(/^[/]|[/]$/g, "");

export const isFbPage = () => /^(www\.){0,1}facebook\.com$/.test(location.host);

export const isHome = () => /^$/.test(getCleanPathname());
