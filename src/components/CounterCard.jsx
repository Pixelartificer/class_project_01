

const CounteerCard = ({icon, number, label}) => {
  return (
    <>
      <div className="flex items-center gap-6 rounded-2xl bg-white p-6 shadow-sm border border-gray-100 max-w-xs">
    
      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-3xl bg-[#EEF4F9] p-3">
        {typeof icon === "string" ? (
          <img src={icon} alt="icon" className="h-full w-full object-contain" />
        ) : (
          icon
        )}
      </div>

     
      <div>
        <h2 className="font-inter text-text48 font-bold text-blueText leading-none">
          {number}
        </h2>
        <p className="mt-2 font-roboto text-text18 font-medium text-lightBlackText">
          {label}
        </p>
      </div>
    </div>
    </>
  )
}

export default CounteerCard
