import SectionHeader from "../components/SectionHeader"

const getPosts = async () => {
  const res = await fetch('http://localhost:4000/posts');
  return res.json();
}

const News = async ({post}) => {
  const posts = await getPosts()
 const firstThreePosts = posts.slice(0,7);
  return (
    <section className="section" id="blog">
      <SectionHeader pretitle="Our Blog" title="Latest News"/>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex flex-col xl:flex-row justify-between gap-12 py-7">
            {firstThreePosts.map((post)=> {
              const {id, date, title, description} = post;
              return (
                <div className="flex-1" key={id}>
                  <div className="text-white font-bold mb-1">{date}</div>
                  <div className="text-xl font-medium mb-4">{title}</div>
                  <div className="text-white/30 mb-6 font-light">{description}</div>
                  </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
