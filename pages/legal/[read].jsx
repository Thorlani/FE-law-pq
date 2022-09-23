import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../../styles/Loader.module.css";
import Head from "next/head";

export async function getStaticPaths() {
  try {
    const result = await axios.get("https://be-law-pq.vercel.app/api/getLegal");
    const data = result.data;
    const paths = data.map((pages) => {
      return {
        params: { read: pages._id.toString() },
      };
    });
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps(context) {
  const read = context.params.read;

  try {
    const res = await axios.get(
      "https://be-law-pq.vercel.app/api/getLegal/" + read
    );
    const result = await axios.get("https://be-law-pq.vercel.app/api/getLC");

    const data = res.data;
    const comments = result.data;

    return {
      props: {
        data: data,
        comments: comments,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

const LegalRead = ({ data, comments }) => {
  const commentSection = comments.map((comment) => {
    return (
      <>
        <div
          key={comment.name}
          className="w-full md:w-[60%] h-fit flex items-start mb-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-[6px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <div className="ml-5">
            <span className="mb-2 font-bold">{comments.name}</span>
            <p className="">{comments.content}</p>
          </div>
        </div>
        <div className="w-full md:w-[60%] h-[1px] bg-black mb-3"></div>
      </>
    );
  });

  const [post, setPost] = useState({
    name: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setPost((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const [isLoading, setIsLoading] = useState(false);

  const postComment = async (event) => {
    setIsLoading(true);
    const body = {
      name: post.name,
      content: post.content,
    };
    try {
      event.preventDefault();
      axios
        .post("https://be-law-pq.vercel.app/api/postLC", body)
        .then((res) => {
          setIsLoading(false);
          window.location.reload(true);
        });
    } catch (error) {
      setIsLoading(false);
      window.alert("Oops! This comment was not posted due to some error.");
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Belovedthorlani</title>
        <meta
          name="description"
          content="This is a law past question app made by Thorlani"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9515848627350834"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {isLoading && (
        <div className="w-full min-h-[100vh] bg-black-rgba fixed top-0 z-20 flex justify-center items-center">
          <div className={styles.spinner}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
      )}
      <div className="w-full h-fit px-[8%] py-[4%] grid gap-8">
        <div className="w-full h-fit p-5 shadow-xl">
          <h1 className="px-[2%] mt-[30px] font-bold  lg:font-extrabold text-4xl md:text-7xl text-left">
            {data?.question}
          </h1>
          <div className="px-[2%] flex items-center mt-[15px]">
            <div className="flex flex-row items-center text-xs md:text-sm">
              <span>Author: </span>
              <span className="font-bold text-sm md:text-base ml-3">
                Thorlani
              </span>
            </div>
            <div className="ml-12 flex flex-row items-center text-xs md:text-sm">
              <span>Date: </span>
              <span className="font-bold text-sm md:text-base ml-3">
                2020-08-26
              </span>
            </div>
          </div>
          <div
            className="px-[2%] mt-[50px] md:mt-[70px] lg:mt-[100px]"
            dangerouslySetInnerHTML={{ __html: data.answer }}
          ></div>
          <p className="px-[2%] my-[20px] font-thin text-sm">
            <i>
              <span className="underline">Note: </span>This answer should only
              be taken as a guide to prepare for your exams or to learn.
            </i>
          </p>
          {/* <div className="mt-[50px] w-full h-fit px-[2%]">
            <h2 className="font-semibold mb-5">How did you find the answer helpful?</h2>
            <form onSubmit={postComment}>
              <div className="flex flex-col mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type='text'
                  name="name"
                  value={post.name}
                  onChange={handleChange}
                  className='border-[1px] border-black w-full md:w-[60%] h-[42px] rounded indent-2 outline-none'
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">Content</label>
                <textarea
                  type='text'
                  name="content"
                  value={post.content}
                  onChange={handleChange}
                  className='border-[1px] border-black w-full md:w-[60%] min-h-[150px] rounded indent-2 pt-2 outline-none'
                />
              </div>
              <button type="submit" className="mt-[10px] px-[15px] py-[6px] bg-black text-white rounded-md">Post</button>
            </form>
          </div> */}
          {/* <div className="mt-[50px] w-full h-fit px-[2%]">
            <h1 className="font-semibold mb-5">Comment Section</h1>
            {commentSection}
            <div></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default LegalRead;
