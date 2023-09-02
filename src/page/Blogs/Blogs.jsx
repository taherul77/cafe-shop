import blog1 from "../../assets/blogs/blog1.jpg";
import blog2 from "../../assets/blogs/blog2.jpg";
import blog3 from "../../assets/blogs/blog3.jpg";
import blog4 from "../../assets/blogs/blog4.jpg";
import blog5 from "../../assets/blogs/blog5.jpg";
import blog6 from "../../assets/blogs/blog6.jpg";
import blog7 from "../../assets/blogs/blog7.jpg";

const Blogs = () => {
  return (
    <div className="pt-28">
      <div className="lg:px-20 px-5 mb-20">
        <div className="border">
          <img src={blog1} alt="" className="object-cover w-full h-[600px]" />
          <div className="lg:px-20 px-5 py-12">
            <h2 className="text-3xl text-[#CA8E46] font-semibold">
              The Culture And Coffee Customs Nowadays
            </h2>
            <p className="mt-10 text-base">
              Quis cupidatat quis dolore amet aliquip ea exercitation labore
              proident dolore minim culpa ullamco aute eiusmod tempor anim
              nostrud quis officia dolore adipisicing elit ex est adipisicing.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-20 px-5 mb-20">
        <div className="border">
          <img src={blog2} alt="" className="object-cover w-full h-[600px]" />
          <div className="lg:px-20 px-5 py-12">
            <h2 className="text-3xl text-[#CA8E46] font-semibold">
            Famous World Coffee Spices
            </h2>
            <p className="mt-10 text-base">
            Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-20 px-5 mb-20">
        <div className="border">
          <img src={blog3} alt="" className="object-cover w-full h-[600px]" />
          <div className="lg:px-20 px-5 py-12">
            <h2 className="text-3xl text-[#CA8E46] font-semibold">
            Learn How To Make It Perfect
            </h2>
            <p className="mt-10 text-base">
            Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-20 px-5 mb-20">
        <div className="border">
          <img src={blog4} alt="" className="object-cover w-full h-[600px]" />
          <div className="lg:px-20 px-5 py-12">
            <h2 className="text-3xl text-[#CA8E46] font-semibold">
            Places To Get Lost In & Enjoy
            </h2>
            <p className="mt-10 text-base">
            Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-20 px-5 mb-20">
        <div className="border">
          <img src={blog5} alt="" className="object-cover w-full h-[600px]" />
          <div className="lg:px-20 px-5 py-12">
            <h2 className="text-3xl text-[#CA8E46] font-semibold">
            Elevate Your Cup Expectation
            </h2>
            <p className="mt-10 text-base">
            Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-20 px-5 mb-20">
        <div className="border">
          <img src={blog6} alt="" className="object-cover w-full h-[600px]" />
          <div className="lg:px-20 px-5 py-12">
            <h2 className="text-3xl text-[#CA8E46] font-semibold">
            Best Cafe In LA Photography
            </h2>
            <p className="mt-10 text-base">
            Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-20 px-5">
        <div className="border">
          <img src={blog7} alt="" className="object-cover w-full h-[600px]" />
          <div className="lg:px-20 px-5 py-12">
            <h2 className="text-3xl text-[#CA8E46] font-semibold">
            This Will Fundamentally Change the Way You Look at Coffee
            </h2>
            <p className="mt-10 text-base">
            Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
