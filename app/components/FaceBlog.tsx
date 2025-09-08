export default function FaceBlog() {
  return (
    <div className="face-glow flex flex-col items-center justify-center w-full h-full p-[5%] bg-[#18181b] rounded-2xl text-white overflow-y-auto shadow-lg">
      <h2 className="text-[clamp(1rem,2vw,2rem)] font-semibold mb-[4%]">📝 Blog</h2>
      <p className="text-gray-300 mb-4 text-center">Check out my latest posts and thoughts on web development, tech, and more.</p>
      <a href="/blog" className="text-primary underline hover:no-underline text-lg font-medium">Go to Blog</a>
    </div>
  );
}
