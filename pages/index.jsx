import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";
import Alert from "../components/alert";
import utilStyles from "../styles/utils.module.css";

// import { getSortedPostsData } from "../lib/posts";

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

function HomePage() {
  useEffect(() => {
    // for (let i = 0; i <= 1000000; i++) {
    //   if (i === 1000000) console.log(i);
    // }
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Script
        src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js"
        strategy="lazyOnload"
        // strategy="afterInteractive"
        onLoad={() => {
          console.log("loaded");
        }}
      ></Script>
      <div>
        <Image
          priority={true}
          style={{ maxWidth: "100%", height: "fit-content" }}
          width={1920}
          height={500}
          src="/images/banner.png"
          alt=""
        />
        <Alert type="">this is message</Alert>
      </div>
      {/* <ul className={utilStyles.list}>
        {allPostsData?.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default HomePage;
