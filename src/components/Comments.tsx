import { useState } from 'react';
import type { Comment } from '../data/blogPosts';

interface CommentsProps {
  comments: Comment[];
}

export default function Comments({ comments: initialComments }: CommentsProps) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: 'Vous (Visiteur)',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
      date: 'À l\'instant',
      content: newComment,
      likes: 0
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleLike = (id: string, isReply = false, parentId?: string) => {
    // Basic mock like functionality
    const newComments = [...comments];
    if (isReply && parentId) {
      const parent = newComments.find(c => c.id === parentId);
      if (parent && parent.replies) {
        const reply = parent.replies.find(r => r.id === id);
        if (reply) reply.likes += 1;
      }
    } else {
      const comment = newComments.find(c => c.id === id);
      if (comment) comment.likes += 1;
    }
    setComments(newComments);
  };

  const CommentItem = ({ comment, isReply = false, parentId }: { comment: Comment, isReply?: boolean, parentId?: string }) => (
    <div className={`comment-item ${isReply ? 'comment-item--reply' : ''}`}>
      <img src={comment.avatar} alt={comment.author} className="comment-item__avatar" />
      <div className="comment-item__content">
        <div className="comment-item__header">
          <strong>{comment.author}</strong>
          <span>{comment.date}</span>
        </div>
        <p className="comment-item__text">{comment.content}</p>
        <div className="comment-item__actions">
          <button className="comment-btn" onClick={() => handleLike(comment.id, isReply, parentId)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            {comment.likes}
          </button>
          {!isReply && <button className="comment-btn">Répondre</button>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="comments-section">
      <h3 className="comments-title">
        Commentaires ({comments.reduce((acc, c) => acc + 1 + (c.replies?.length || 0), 0)})
      </h3>
      
      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="comment-form__avatar">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" alt="Vous" />
        </div>
        <div className="comment-form__input-wrapper">
          <textarea 
            placeholder="Partagez votre avis sur cet article..." 
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comment-form__input"
            rows={3}
          ></textarea>
          <div className="comment-form__footer">
            <button type="submit" className="btn btn--primary btn--sm">Publier</button>
          </div>
        </div>
      </form>

      <div className="comments-list">
        {comments.length === 0 ? (
          <p className="comments-empty">Soyez le premier à commenter !</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id}>
              <CommentItem comment={comment} />
              {comment.replies && comment.replies.length > 0 && (
                <div className="comment-replies">
                  {comment.replies.map(reply => (
                    <CommentItem key={reply.id} comment={reply} isReply={true} parentId={comment.id} />
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
