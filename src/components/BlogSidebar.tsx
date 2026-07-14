import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getTags, blogPosts } from '../data/blogPosts';
import type { BlogPost } from '../data/blogPosts';

interface BlogSidebarProps {
  onSearch: (term: string) => void;
  onCategorySelect: (category: string | null) => void;
  activeCategory: string | null;
}

export default function BlogSidebar({ onSearch, onCategorySelect, activeCategory }: BlogSidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = getCategories();
  const tags = getTags();
  
  // Get top 3 most viewed articles
  const popularPosts: BlogPost[] = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <aside className="blog-sidebar">
      {/* Search Widget */}
      <div className="sidebar-widget">
        <h3 className="sidebar-widget__title">Recherche</h3>
        <div className="sidebar-search">
          <input 
            type="text" 
            placeholder="Mots-clés, Auteur..." 
            value={searchTerm}
            onChange={handleSearchChange}
            className="sidebar-search__input"
          />
          <svg className="sidebar-search__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="sidebar-widget">
        <h3 className="sidebar-widget__title">Catégories</h3>
        <ul className="sidebar-categories">
          <li>
            <button 
              className={`sidebar-categories__btn ${activeCategory === null ? 'active' : ''}`}
              onClick={() => onCategorySelect(null)}
            >
              Tous les articles
            </button>
          </li>
          {categories.map((category: string) => (
            <li key={category}>
              <button 
                className={`sidebar-categories__btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => onCategorySelect(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts Widget */}
      <div className="sidebar-widget">
        <h3 className="sidebar-widget__title">Articles Populaires</h3>
        <div className="sidebar-popular">
          {popularPosts.map(post => (
            <Link to={`/blog/${post.id}`} className="sidebar-popular__item" key={post.id}>
              <img src={post.imageUrl} alt={post.title} className="sidebar-popular__img" />
              <div className="sidebar-popular__content">
                <h4 className="sidebar-popular__post-title">{post.title}</h4>
                <span className="sidebar-popular__meta">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags Widget */}
      <div className="sidebar-widget">
        <h3 className="sidebar-widget__title">Tags Populaires</h3>
        <div className="sidebar-tags">
          {tags.map((tag: string) => (
            <span key={tag} className="sidebar-tag">#{tag}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}
