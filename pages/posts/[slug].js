import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";
import Head from "next/head";

export default function SinglePostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta
          name="single-blog-description"
          content={props.post.title}
        />
      </Head>
      <PostContent post={props.post} />;
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileName = getPostsFiles();
  const slugs = postFileName.map((filename) => filename.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
