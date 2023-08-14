"use client"

import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import useSWR from 'swr';
import Breadcrumb from "@/components/Common/Breadcrumb";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, mutate, error } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'unauthenticated') {
    router?.push('/signin');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Dashboard"
        description="Write blogs here."
      />
      <section className="pt-[120px] pb-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full">
              {data?.map((post) => (
                <div key={post._id} className="mb-8 p-4 border rounded-lg shadow-lg">
                  <div className="mb-4">
                    <Image src={post.image} alt="" width={200} height={100} />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600">{post.desc}</p>
                  <button
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 p-4 border rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">Add New Post</h1>
            <input className="w-full mb-2 px-4 py-2 border rounded" type="text" placeholder="Title" />
            <input className="w-full mb-2 px-4 py-2 border rounded" type="text" placeholder="Desc" />
            <input className="w-full mb-2 px-4 py-2 border rounded" type="text" placeholder="Image" />
            <textarea
              className="w-full mb-2 px-4 py-2 border rounded"
              placeholder="Content"
              cols="30"
              rows="5"
            ></textarea>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
