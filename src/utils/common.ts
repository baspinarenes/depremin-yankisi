export const getFavicon = (url: string) => {
  return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=64`;
};

export const fetcher = async (input: RequestInfo, init?: RequestInit): Promise<any> => {
  const res = await fetch(input, {
    ...init,
    headers: {
      "Access-Control-Allow-Credentials": "*",
    },
  });

  return res.json();
};
