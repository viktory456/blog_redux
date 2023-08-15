import PostsExcerpt from "./PostsExcerpt";
import { useGetPostsQuery } from './postsSlice';
import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


const PostsList = () => {
   const {
      isLoading,
      isSuccess,
      isError,
      error
   } = useGetPostsQuery()

   const orderedPostIds = useSelector(selectPostIds)
   // const postsStatus = useSelector(getPostsStatus)
   // const error = useSelector(getPostsError)

//    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

   let content;
   if(isLoading){
    content = <p>'Loading...'</p>
   } else if(isSuccess) {
    // const orderedPosts = orderedPostIds.slice().sort((a,b) => b.date.localeCompare(a.date))
    content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId}/>)
   } else if (isError){
    content = <p>{error}</p>
   }
   
    return (
        <section>
           {content}
        </section>
    )
}

export default PostsList