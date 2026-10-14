import React from 'react'
import { FiCheck } from 'react-icons/fi';
import { RxCross2 } from "react-icons/rx";

const PricingCard = ({title, price, period, feature1, feature2, feature3, feature4, buttonText}) => {
  return (
    <>
      <div className="w-full max-w-[366px] h-[510px] bg-[#F8F9FA] rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
      <div>
        {/* Plan Title */}
        <h3 className="text-22 text font-bold text-bgGreen mb-3 font-raleway">
          {title}
        </h3>

        {/* Price & Period */}
        <div className="flex items-baseline gap-1.5 mb-6">
          <span className="text-text48 font-extrabold text-darkBlueText tracking-tight font-inter">
            {price}
          </span>
          <span className="text-lightBlackText font-medium text-text16 font-inter">
            {period}
          </span>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 mb-6" />

        {/* Features List */}
        <ul className="space-y-4 mb-8 ">
          <li className="flex items-center gap-3 text-lightBlackText text-sm font-medium font-roboto">
            <span className="w-5 h-5 rounded-full bg-[#EBF3FB] flex items-center justify-center shrink-0">
              <FiCheck className="w-3.5 h-3.5 text-[#2B78C6]" />
            </span>
            <span>{feature1}</span>
          </li>

          <li className="flex items-center gap-3 text-lightBlackText text-sm font-medium font-roboto">
            <span className="w-5 h-5 rounded-full bg-[#EBF3FB] flex items-center justify-center shrink-0">
              <FiCheck className="w-3.5 h-3.5 text-[#2B78C6]" />
            </span>
            <span>{feature2}</span>
          </li>

          <li className="flex items-center gap-3 text-lightBlackText text-sm font-medium font-roboto">
            <span className="w-5 h-5 rounded-full bg-[#EBF3FB] flex items-center justify-center shrink-0">
              <RxCross2 className="w-3.5 h-3.5 text-[#ef4444]" />
            </span>
            <span>{feature3}</span>
          </li>

          <li className="flex items-center gap-3 text-lightBlackText text-sm font-medium font-roboto">
            <span className="w-5 h-5 rounded-full bg-[#EBF3FB] flex items-center justify-center shrink-0">
              <FiCheck className="w-3.5 h-3.5 text-[#2B78C6]" />
            </span>
            <span>{feature4}</span>
          </li>
        </ul>
      </div>

      {/* Action Button */}
      <button className="w-full py-3 px-4 bg-[#2B78C6] hover:bg-[#2060a0] text-white font-medium rounded-xl transition-colors cursor-pointer text-center shadow-sm font-raleway">
        {buttonText}
      </button>
    </div>
    </>
  )
}

export default PricingCard
