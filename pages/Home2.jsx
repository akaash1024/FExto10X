import { useState } from "react";
import { useAuth } from "../AuthContextStore";
import { CiUser } from "react-icons/ci";
import { LiaCommentSolid } from "react-icons/lia";

export const Home = () => {
  const { posts, api } = useAuth();
  const [comments, setComments] = useState({});
  const [loadingPostId, setLoadingPostId] = useState(null);

  const handleCommentLoading = async (id) => {
    setLoadingPostId(id); // Show loading indicator for this post
    try {
      const { data } = await api.get(`/api/comment/getByPostId/${id}`);
      setComments((prev) => ({ ...prev, [id]: data.comments }));
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setLoadingPostId(null);
    }
  };

  return (
    <>
      


      <div className="flex felx-colm">
        <div className="card">
          <ul>
            {posts.map((post) => (
              <li key={post._id}>
                <span>
                  {" "}
                  <CiUser />
                  {post.createdBy.name}
                </span>
                <h1>{post.title}</h1>
                <p>{post.description}</p>

                <div>
                  {comments[post._id] ? (
                    <ul>
                      {comments[post._id].map((comment) => (
                        <li key={comment._id}>
                          <h4>{comment.commentedInput}</h4>
                          <span>by {comment.commentedBy.name}</span>
                        </li>
                      ))}
                    </ul>
                  ) : loadingPostId === post._id ? (
                    <p>Loading comments...</p>
                  ) : (
                    <button onClick={() => handleCommentLoading(post._id)}>
                      <LiaCommentSolid />
                      Load Comments
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
