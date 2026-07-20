import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Comments from '../components/Comments';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts (same category, excluding current, max 3)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
    
  if (relatedPosts.length === 0) {
    const backupPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);
    relatedPosts.push(...backupPosts);
  }

  const handleShare = (platform: string) => {
    // Mock sharing function
    alert(`Partage sur ${platform} simulé (Lien: ${window.location.href})`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Lien copié dans le presse-papier !');
  };

  return (
    <article className="article-page">
      {/* Article Header - Image left, Content right */}
      <section className="article-header">
        <div className="container">
          <div className="article-header__grid">
            <div className="article-header__image-wrap">
              <img src={post.imageUrl} alt={post.title} className="article-header__image" />
            </div>
            <div className="article-header__content reveal reveal--up reveal--visible">
              <h1 className="article-title">{post.title}</h1>
              <p className="article-header__excerpt">{post.excerpt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="article-body">
        <div className="container article-container">
          
          <div className="article-tags">
            {post.tags.map(tag => (
              <span key={tag} className="article-tag">#{tag}</span>
            ))}
          </div>

          <div className="article-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="article-footer">
            <div className="article-share">
              <span>Partager cet article :</span>
              <div className="article-share__buttons">
                <button className="share-btn share-btn--facebook" onClick={() => handleShare('Facebook')}>Facebook</button>
                <button className="share-btn share-btn--x" onClick={() => handleShare('X')}>X (Twitter)</button>
                <button className="share-btn share-btn--linkedin" onClick={() => handleShare('LinkedIn')}>LinkedIn</button>
                <button className="share-btn share-btn--whatsapp" onClick={() => handleShare('WhatsApp')}>WhatsApp</button>
                <button className="share-btn share-btn--telegram" onClick={() => handleShare('Telegram')}>Telegram</button>
                <button className="share-btn" onClick={copyLink}>Copier le lien</button>
              </div>
            </div>

            {/* Author Info Box */}
            <div className="article-author-box">
              <img src={post.authorPhoto} alt={post.author} className="article-author-box__img" />
              <div className="article-author-box__content">
                <h4>{post.author}</h4>
                <span className="article-author-box__role">{post.authorRole}</span>
                <p className="article-author-box__bio">{post.authorBio}</p>
                <div className="article-author-box__social">
                  <a href="#" className="author-social-link">LinkedIn</a>
                  <a href="#" className="author-social-link">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="article-comments-section">
        <div className="container article-container">
          <Comments comments={post.comments} />
        </div>
      </section>

      {/* Related Posts */}
      <section className="related-posts">
        <div className="container">
          <h2 className="related-posts__title">Articles similaires</h2>
          <div className="blog-grid">
            {relatedPosts.map((relatedPost, index) => (
              <Link 
                to={`/blog/${relatedPost.id}`} 
                className="blog-card reveal reveal--up reveal--visible" 
                key={relatedPost.id}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="blog-card__image-wrapper">
                  <img src={relatedPost.imageUrl} alt={relatedPost.title} className="blog-card__image" />
                  <div className="blog-card__category">{relatedPost.category}</div>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <span>{relatedPost.date}</span>
                    <span className="blog-card__meta-sep">•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                  <h3 className="blog-card__title">{relatedPost.title}</h3>
                  <div className="blog-card__footer">
                    <div className="blog-card__author">
                      <img src={relatedPost.authorPhoto} alt={relatedPost.author} className="blog-card__author-avatar-sm" />
                      {relatedPost.author}
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
        </div>
      </section>
    </article>
  );
}
