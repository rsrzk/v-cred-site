import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PageScrollButton from "@/components/Blog/PageScrollButton";

async function getData() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = await fetch(`${apiUrl}/api/posts`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json();
}

const Blog = async () => {
  // const data = await getData();
  const data = [];
  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Check out our blog as we discuss lessons learned from case studies and our experience building a data analytics startup."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {data.map((item: any) => (
              <div key={item.id}>
                <SingleBlog blog={item} itemId={item._id} />
              </div>
            ))}
          </div>
        </div>
        <PageScrollButton />
      </section>
    </>
  );
};

export default Blog;