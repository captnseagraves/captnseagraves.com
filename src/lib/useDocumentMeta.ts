import { useEffect } from "react";

interface Meta {
  title: string;
  description: string;
  ogImage?: string;
  url?: string;
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector);
  if (el) {
    el.setAttribute(attr, value);
  }
}

export function useDocumentMeta(meta: Meta) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = meta.title;

    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    if (meta.ogImage) {
      const absolute = meta.ogImage.startsWith("http")
        ? meta.ogImage
        : `${window.location.origin}${meta.ogImage}`;
      setMeta('meta[property="og:image"]', "content", absolute);
      setMeta('meta[name="twitter:image"]', "content", absolute);
    }
    if (meta.url) {
      setMeta('meta[property="og:url"]', "content", meta.url);
      setMeta('link[rel="canonical"]', "href", meta.url);
    }
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);

    return () => {
      document.title = prevTitle;
    };
  }, [meta.title, meta.description, meta.ogImage, meta.url]);
}
