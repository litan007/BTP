import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import { blogPosts, getCategories } from '../data/blogPosts';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6); // Pagination logic

  // Filter logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = activeCategory ? post.category === activeCategory : true;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, activeCategory]);

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);
  const displayedPosts = regularPosts.slice(0, visibleCount);
  const hasMore = visibleCount < regularPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const categories = getCategories();

  return (
    <div className="blog-page">
      <PageHero
        label="ACTUALITÉS"
        title="Notre Blog"
        subtitle="Décryptage, innovations et actualités du secteur de la construction. Restez informés des dernières tendances du BTP."
        image="/photos/blog-construction-durable.jpg"
        breadcrumb={[
          { label: 'Accueil', to: '/' },
          { label: 'Blog' }
        ]}
      >
        <button 
          className="btn btn--primary"
          onClick={() => {
            document.getElementById('blog-content')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Découvrir les articles
        </button>
      </PageHero>

      <section className="blog-section" id="blog-content">
        <div className="container">
          
          {/* Horizontal Filters */}
          <div className="blog-filters-bar reveal reveal--up reveal--visible">
            <div className="blog-filters__search">
              <input 
                type="text" 
                placeholder="Rechercher un article ou un auteur..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="blog-filters__search-input"
              />
              <svg className="blog-filters__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </div>
            
            <div className="blog-filters__categories">
              <button 
                className={`blog-filter-btn ${activeCategory === null ? 'active' : ''}`}
                onClick={() => setActiveCategory(null)}
              >
                Tous
              </button>
              {categories.map((category: string) => (
                <button 
                  key={category}
                  className={`blog-filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-layout-full">
              {filteredPosts.length === 0 ? (
                <div className="blog-empty">
                  <h3>Aucun article ne correspond à votre recherche.</h3>
                  <button className="btn btn--outline" onClick={() => { setSearchTerm(''); setActiveCategory(null); }}>
                    Réinitialiser les filtres
                  </button>
                </div>
              ) : (
                <>
                  {/* Featured Post */}
                  {featuredPost && (
                    <div className="blog-featured reveal reveal--up reveal--visible">
                      <Link to={`/blog/${featuredPost.id}`} className="blog-featured__inner">
                        <div className="blog-featured__image-wrapper">
                          <img src={featuredPost.imageUrl} alt={featuredPost.title} className="blog-featured__image" />
                          <div className="blog-card__category">{featuredPost.category}</div>
                        </div>
                        <div className="blog-featured__content">
                          <h2 className="blog-featured__title">{featuredPost.title}</h2>
                          <p className="blog-featured__excerpt">{featuredPost.excerpt}</p>
                          <div className="blog-featured__footer">
                            <div className="blog-card__author">
                              <img src={featuredPost.authorPhoto} alt={featuredPost.author} className="blog-card__author-avatar" />
                              Par {featuredPost.author}
                            </div>
                            <span className="blog-card__read-more">
                              Lire l'article
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}

                  {/* Regular Posts Grid */}
                  <div className="blog-grid">
                    {displayedPosts.map((post, index) => (
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="blog-card reveal reveal--up reveal--visible" 
                        key={post.id}
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      >
                        <div className="blog-card__image-wrapper">
                          <img src={post.imageUrl} alt={post.title} className="blog-card__image" />
                          <div className="blog-card__category">{post.category}</div>
                        </div>
                        <div className="blog-card__content">
                          <h3 className="blog-card__title">{post.title}</h3>
                          <p className="blog-card__excerpt">{post.excerpt}</p>
                          <div className="blog-card__footer">
                            <div className="blog-card__author">
                              <img src={post.authorPhoto} alt={post.author} className="blog-card__author-avatar-sm" />
                              {post.author}
                            </div>
                            <span className="blog-card__read-more-icon">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Pagination / Load More */}
                  {hasMore && (
                    <div className="blog-pagination">
                      <button className="btn btn--outline" onClick={handleLoadMore}>
                        Charger plus d'articles
                      </button>
                    </div>
                  )}
                </>
              )}
          </div>
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
}
