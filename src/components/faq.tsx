import Image from "next/image";

export default function FAQ() {
  return (
    <section id="faq" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        <div className="accordion">
          <div className="accordion-item border-b">
            <input type="checkbox" id="faq1" className="accordion-toggle hidden" />
            <label htmlFor="faq1" className="accordion-title font-semibold">Who are we?</label>
            <div className="accordion-content pb-4">
              <p>We are a dedicated team focused on providing the latest information, technical services, and tutorials related to AI(artificial intelligence).</p>
            </div>
          </div>
          <div className="accordion-item border-b">
            <input type="checkbox" id="faq2" className="accordion-toggle hidden" />
            <label htmlFor="faq2" className="accordion-title font-semibold">How to contact us?</label>
            <div className="accordion-content pb-4 flex justify-center">
              <div className="mr-4 text-center">
                <Image src="/static/img/mp-weixin.png" alt="AI Learning Platform" width={129} height={129} className="mx-auto mt-4" />
                <p>WeChat Official Account: AI Learning Platform</p>
              </div>
              <div className="mr-4 text-center">
                <Image src="/static/img/wechat-personal.jpg" alt="Wechat Editor" width={129} height={129} className="mx-auto mt-4" />
                <p>WeChat Editor: AI Learning Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
