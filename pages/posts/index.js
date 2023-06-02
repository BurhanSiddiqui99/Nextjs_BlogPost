import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util";
import Head from "next/head";

export default function AllPostsPage(props) {
    return <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="all-blog-description"
          content="All Blog about frontend development" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
}
export function getStaticProps(){
    const allPosts = getAllPosts();
    return {
      props: {
        posts: allPosts
      }
    }
  }