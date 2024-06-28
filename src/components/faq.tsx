import Image from "next/image";

export default function FAQ() {
  return (
    <section id="faq" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">常见问题</h2>
      <div className="max-w-3xl mx-auto">
        <div className="accordion">
          <div className="accordion-item border-b">
            <input type="checkbox" id="faq1" className="accordion-toggle hidden" />
            <label htmlFor="faq1" className="accordion-title font-semibold">我们是谁？</label>
            <div className="accordion-content pb-4">
              <p>我们是一个致力于提供最新的人工智能相关信息、技术服务和教程的团队。</p>
            </div>
          </div>
          <div className="accordion-item border-b">
            <input type="checkbox" id="faq2" className="accordion-toggle hidden" />
            <label htmlFor="faq2" className="accordion-title font-semibold">如何联系我们？</label>
            <div className="accordion-content pb-4">
              <Image src="/static/img/mp-weixin.png" alt="从零开始学AI" width={129} height={129} className="mx-auto mt-4" />
              <p>关注我们的公众号：从零开始学AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}