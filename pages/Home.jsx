import { useState } from "react";
import { useAuth } from "../AuthContextStore";
import { CiUser } from "react-icons/ci";
import { LiaCommentSolid } from "react-icons/lia";

export const Home = () => {
  const { posts, api, user } = useAuth();
  const [comments, setComments] = useState({});
  const [inputData, setInputData] = useState({
    title: "",
    thought: "",
  });
  const [loadingPostId, setLoadingPostId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };
  const handleCommentLoading = async (id) => {
    setLoadingPostId(id);
    try {
      const { data } = await api.get(`/api/comment/getByPostId/${id}`);
      setComments((prev) => ({ ...prev, [id]: data.comments }));
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setLoadingPostId(null);
    }
  };

  const onHandlePostSubmit = (e)=> {
    // login would be here
  }

  return (
    <>
      <main>
        <div className="main container">
          <p>{`Welcome ${user},`} </p>

          <form onSubmit={onHandlePostSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={inputData.title}
              onChange={handleInputChange}
            />

            <label htmlFor="thought">Thought</label>
            <input
              type="text"
              id="thought"
              name="thought"
              value={inputData.thought}
              onChange={handleInputChange}
            />

            <button>Add</button>
          </form>

          <pre>
            .........................................................................
          </pre>

          <div className="post--container grid grid-two-colm">
            <ul className="flex felx-colm">
              <div className="">
                {posts.map((post) => (
                  <li key={post._id} className="card">
                    <div className="grid grid-two-colm">
                      <div>
                        <span>
                          <CiUser />
                          {post.createdBy.name}
                        </span>
                        <h2>{post.title}</h2>
                        <p>{`- ${post.description}`}</p>
                      </div>
                      <div>
                        {
                          <>
                            <div className="post--action flex felx-colm">
                              <button
                                aria-label="Load comments"
                                onClick={() => handleCommentLoading(post._id)}
                              >
                                <LiaCommentSolid />
                                Get Comments
                              </button>
                              <button
                                aria-label="Edit comments"
                                onClick={() => handleCommentLoading(post._id)}
                              >
                                <LiaCommentSolid />
                                Edit Comments
                              </button>
                              <button
                                aria-label="Edit comments"
                                onClick={() => handleCommentLoading(post._id)}
                              >
                                <LiaCommentSolid />
                                Delete Comments
                              </button>
                            </div>
                          </>
                        }
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </ul>

            <ul className="flex felx-colm">
              {posts.map((post) => (
                <li key={post._id}>
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
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <pre>
            .........................................................................
          </pre>
        </div>
      </main>
    </>
  );
};
