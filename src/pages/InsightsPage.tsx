import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { Search, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface InsightsPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

const CATEGORIES = [
  'All Categories',
  'Meta Ads and Google Ads',
  'Project Marketing',
  'CRM and Sales Automation',
  'Channel Partner Growth',
  'Real Estate SEO',
  'Websites and Landing Pages',
  'Real Estate Content Marketing',
  'Real Estate Marketing Strategy'
];

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Categories' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block">
              Educational Insights & Tactical Playbooks
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-tight">
              Real Estate Digital Marketing Strategy
            </h1>
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
              In-depth research, ad qualification frameworks, and operational guides written exclusively for real estate promoters, sales heads, and channel partner leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === 'All Categories' && searchQuery === '' && (
        <section className="py-12 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              onClick={() => onNavigate(`/insights/${featuredPost.slug}`)}
              className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 cursor-pointer hover:border-gray-400 transition-all hover:shadow-xs group"
            >
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#85888C] mb-3">
                <span className="text-[#202020] uppercase font-bold tracking-wider">Featured Strategy</span>
                <span>·</span>
                <span>{featuredPost.category}</span>
                <span>·</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202020] group-hover:text-black mb-3 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-3xl mb-6">
                {featuredPost.summary}
              </p>
              <div className="flex items-center space-x-2 text-xs font-bold text-[#202020]">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Controls: Search & Category Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[68px] z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search strategies or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#202020]"
              />
            </div>

            {/* Category Segmented Scroll */}
            <div className="flex items-center space-x-1 overflow-x-auto pb-1 max-w-full text-xs font-medium no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#202020] text-white font-semibold'
                      : 'text-[#4b5563] hover:text-[#202020] hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200 p-8 max-w-md mx-auto">
              <BookOpen className="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <h3 className="text-base font-bold text-[#202020]">No Articles Match Your Search</h3>
              <p className="text-xs text-[#4b5563] mt-1 mb-4">Try clearing the category filter or search keywords.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All Categories');
                  setSearchQuery('');
                }}
                className="text-xs font-semibold text-[#202020] underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  onClick={() => onNavigate(`/insights/${post.slug}`)}
                  className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:border-gray-400 transition-all cursor-pointer group hover:shadow-xs"
                >
                  <div>
                    <div className="flex items-center space-x-2 text-[11px] text-[#85888C] mb-3">
                      <span className="font-semibold text-[#202020]">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1 inline" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#202020] group-hover:text-black mb-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#4b5563] leading-relaxed line-clamp-3 mb-4">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#202020]">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
