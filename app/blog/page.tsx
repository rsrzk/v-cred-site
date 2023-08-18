'use client'
import React, { useState, useEffect } from 'react';
import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PageScrollButton from "@/components/Blog/PageScrollButton";

async function getData() {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const response = await fetch(`${apiUrl}/api/posts`, {
      cache: "no-store",
    });

    if (!response.ok) {
      const errorMessage = `API Error: Response status ${response.status} - ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    const errorMessage = `Fetch Error: ${error.message}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
}

const Blog = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await getData();
        setData(fetchedData);
        setError(null);
      } catch (error) {
        setError('Failed to fetch data');
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Check out our blog as we discuss lessons learned from case studies and our experience building a data analytics startup."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          {error ? (
            <div>Error: {error}</div>
          ) : (
            <div className="-mx-4 flex flex-wrap justify-center">
              {data.length === 0 ? (
                <div>No data available.</div>
              ) : (
                data.map((item) => (
                  <div key={item.id}>
                    <SingleBlog blog={item} itemId={item._id} />
                  </div>
                ))
              )}
            </div>
          )}
        </div>
        <PageScrollButton />
      </section>
    </>
  );
};

export default Blog;