import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { ArrowLeft, Clock, Calendar, User, Share2, Check, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenConsultation
}) => {
  const [copied, setCopied] = useState(false);
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#202020] mb-3">Article Not Found</h2>
        <p className="text-sm text-[#4b5563] mb-6">The requested insight article could not be located.</p>
        <button
          onClick={() => onNavigate('/insights')}
          className="bg-[#202020] text-white px-5 py-2.5 rounded-md text-xs font-semibold"
        >
          View All Insights
        </button>
      </div>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  const otherRelated = related.length > 0 ? related : BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Header & Meta */}
      <section className="py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-[#85888C] mb-6" aria-label="Breadcrumb">
            <button onClick={() => onNavigate('/')} className="hover:text-[#202020]">Home</button>
            <span>/</span>
            <button onClick={() => onNavigate('/insights')} className="hover:text-[#202020]">Insights</button>
            <span>/</span>
            <span className="text-[#202020] font-semibold truncate max-w-xs">{post.category}</span>
          </nav>

          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#85888C] pt-2 border-t border-gray-100">
              <span className="flex items-center">
                <User className="w-3.5 h-3.5 mr-1" />
                {post.author.name} ({post.author.role})
              </span>
              <span>·</span>
              <span className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1" />
                {post.readTime}
              </span>
              <span>·</span>
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1" />
                {post.publishDate}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Key Takeaways Callout */}
        <div className="bg-gray-50 border-l-3 border-[#202020] p-6 sm:p-7 rounded-r-lg mb-10 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#202020]">
            Executive Key Takeaways
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#4b5563]">
            {post.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-[#202020] font-bold">·</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Paragraphs */}
        <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-[#4b5563] leading-relaxed">
          {post.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#202020] tracking-tight pt-2">
                {sec.heading}
              </h2>
              {sec.body.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Share & Consultation Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-[#202020] border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Link Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#85888C]" />
                <span>Share This Article</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              trackEvent('consultation_cta_click', { location: 'article_footer' });
              onOpenConsultation();
            }}
            className="bg-[#202020] hover:bg-black text-white px-5 py-2.5 rounded-md text-xs font-semibold transition-colors flex items-center space-x-1.5"
          >
            <span>Discuss This Strategy With Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[#202020] mb-6">
            Related Real Estate Marketing Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherRelated.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onNavigate(`/insights/${rel.slug}`)}
                className="p-5 border border-gray-200 rounded-lg hover:border-gray-400 cursor-pointer transition-colors group bg-gray-50/40"
              >
                <span className="text-[11px] font-semibold text-[#85888C] block mb-1">
                  {rel.category} · {rel.readTime}
                </span>
                <h4 className="text-sm font-bold text-[#202020] group-hover:text-black mb-2 leading-snug">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#4b5563] line-clamp-2">
                  {rel.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
