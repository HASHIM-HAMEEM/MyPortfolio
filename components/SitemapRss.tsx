const SitemapRss = () => {
  return (
    <div className="flex justify-center gap-8 py-4 text-sm text-muted-theme">
      <a 
        href="/sitemap.xml" 
        className="hover:accent-text hover:underline transition-colors"
      >
        Sitemap
      </a>
      <a 
        href="/rss.xml" 
        className="hover:accent-text hover:underline transition-colors"
      >
        RSS Feed
      </a>
    </div>
  );
};

export default SitemapRss; 
