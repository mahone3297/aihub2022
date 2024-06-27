export default function Products() {
  return (
    <section id="products" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">我们的产品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4"><a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3MDIyNTgzNA==&action=getalbum&album_id=3280266823330201601#wechat_redirect" target="_blank" className="text-blue-500 hover:underline">AI 合集</a></h3>
          <p className="text-gray-700">浏览我们的人工智能文章合集，涵盖机器学习、深度学习、人工智能应用等多个主题。</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4"><a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3MDIyNTgzNA==&action=getalbum&album_id=3280266823330201601#wechat_redirect" target="_blank" className="text-blue-500 hover:underline">AI Coze 合集</a></h3>
          <p className="text-gray-700">浏览我们的 Coze 文章合集，探索各种主题，尽在一个地方。</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4"><a href="https://ai-blog.aihub2022.top/" target="_blank" className="text-blue-500 hover:underline">AI 博客</a></h3>
          <p className="text-gray-700">在我们的博客中，您将发现有关人工智能的最新资讯、教程和案例分析。</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4"><a href="https://ai-words.aihub2022.top/" target="_blank" className="text-blue-500 hover:underline">AI 单词</a></h3>
          <p className="text-gray-700">欢迎访问我们的AI词典。在这里，AI 将帮助你更好的理解单词。</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4"><a href="https://openai-doc.aihub2022.top/" target="_blank" className="text-blue-500 hover:underline">OpenAI 中文文档</a></h3>
          <p className="text-gray-700">OpenAI 中文文档为中文开发者提供了一站式的人工智能技术学习和开发指南。</p>
        </div>
      </div>
    </section>
  );
}