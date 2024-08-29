import React from 'react'
import { FaStar } from "react-icons/fa";

const Test = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="../public/images/image10.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              “I expect convenience, reliability, and a seamless process from start to finish. When I visit an online store, I want to easily find what I'm looking for without any hassle. The website should be intuitive, with clear categories and search functionality that helps me locate products quickly.”
            </blockquote>
           
           {/* avater */}

           <div className="flex items-center gap-4 flex-wrap">
         
            <div className="space-y-1">
              <h5 className="text-lg font-semibold">Customer Feedback</h5>
              <div className="flex items-center gap-2"><FaStar className="text-yellow-400"/> <span className="font-medium">4.9</span> <span className="text-[#807E7E]">(18.6k Reviews)</span></div>
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="w-12 bg-neutral text-neutral-content">
      <span>+99</span>

      
    </div>
  </div>
  
</div>
<div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
</div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test