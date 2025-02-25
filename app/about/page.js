import Link from "next/link";

// import simplfied from "../../public/simplfied"
export const metadata = {
  title:"About"
}
async function Page() {
  return (
    <div className="flex flex-col mx-24 px-3 mt-10 text-stone-800 gap-10   py-3">
        <div className="flex justify-between">

        <h1 className="font-semibold text-3xl">About Our Site</h1>
        <Link href="/products" className="bg-slate-950 rounded-md text-sm py-2 px-3 text-white hover:bg-slate-800">Explore Brands</Link>
        </div>
      <div>
        <p className=" mt-8 space-x-10 text-left">
          Welcome to our eCommerce platform, where we strive to connect everyone
          with a seamless online shopping experience. Our mission is to provide
          a diverse range of products that cater to all your needs, whether you
          are searching for the latest gadgets, stylish apparel, or unique home
          decor. We understand that shopping online should be convenient,
          enjoyable, and reliable. That's why we have designed our website to be
          user-friendly, ensuring that you can easily navigate through our
          extensive catalog. Our team is dedicated to curating high-quality
          items at competitive prices, making sure you get the best value for
          your money. At our core, we believe in transparency and customer
          satisfaction. Our customer support team is always ready to assist you,
          whether you have questions about a product or need help with your
          order. We take pride in our fast shipping and hassle-free returns, so
          you can shop with confidence. Join our community of satisfied
          customers and discover the joy of online shopping with us. We are
          excited to serve you and help you find exactly what you are looking
          for. Thank you for choosing our eCommerce site!
        </p>
      </div>

      <div className="mt-5 flex justify-between  p-4  text-stone-700  ">
        <div className="flex flex-col w-1/2">
          <h1 className="text-2xl font-semibold">Mission</h1>
          <p className="text-sm mt-5 text-left ">
            We aim to simplify your shopping experience, bringing everything you
            need right to your fingertips—because we believe grocery shopping
            should be easy and enjoyable!
          </p>
        </div>
        <img src="simplfied.jpg" className="object-cover w-1/3 rounded-md" />
      </div>

      <div className=" flex justify-between mt-5  p-4 text-stone-700">
        <img src="corevalues.jpg" className="w-1/3 rounded-md" />
        <div className="flex flex-col gap-2 w-1/2">
          <h1 className="text-2xl font-semibold">Core Values</h1>
          <div className="flex flex-col mt-3 gap-2">
            <h2 className="font-semibold">Customer Centric</h2>
            <p className="text-sm">
              We put you first, always. Your needs and feedback shape what we
              do.
            </p>
          </div>
          <div className="flex flex-col gap-2">
           <h2 className="font-semibold">Sustainability</h2>
           <p className="text-sm">We care about our planet. That’s why we’re committed to eco-friendly practices.</p>
          </div>
          <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Community</h2>
          <p className="text-sm">We believe in supporting local producers and fostering a sense of community through our offerings.</p>
          </div>
          <div className="flex flex-col gap-2">
           <h2 className="font-semibold">Innovation</h2>
           <p className="text-sm">We’re always looking for smarter, faster ways to serve you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
