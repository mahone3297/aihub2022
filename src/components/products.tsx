export default function Products() {
  return (
    <section id="products" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4"><a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3MDIyNTgzNA==&action=getalbum&album_id=3280266823330201601#wechat_redirect" target="_blank" className="text-blue-500 hover:underline">AI Collection</a></h3>
          <p className="text-gray-700">Browse our collection of AI articles covering various topics including machine learning, deep learning, AI applications, and more.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4"><a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3MDIyNTgzNA==&action=getalbum&album_id=3280266823330201601#wechat_redirect" target="_blank" className="text-blue-500 hover:underline">AI Coze Collection</a></h3>
          <p className="text-gray-700">Explore our Coze article collection, covering a wide range of topics all in one place.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4"><a href="https://ai-blog.aihub2022.top/" target="_blank" className="text-blue-500 hover:underline">AI Blog</a></h3>
          <p className="text-gray-700">On our blog, you will find the latest news, tutorials, and case studies on AI(artificial intelligence).</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4"><a href="https://ai-words.aihub2022.top/" target="_blank" className="text-blue-500 hover:underline">AI Words</a></h3>
          <p className="text-gray-700">Welcome to our AI dictionary. Here, AI will help you better understand words.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4"><a href="https://openai-doc.aihub2022.top/" target="_blank" className="text-blue-500 hover:underline">OpenAI Chinese Documentation</a></h3>
          <p className="text-gray-700">OpenAI Chinese documentation provides Chinese developers with a one-stop guide for learning and developing AI technologies.</p>
        </div>
      </div>
    </section>
  );
}
