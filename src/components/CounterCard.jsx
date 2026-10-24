

const CounteerCard = ({imageSrc, number, label, alt, className}) => {
  return (
    <>
      <div className="flex items-center gap-6 rounded-2xl bg-white p-6 shadow-sm border border-gray-100 max-w-xs">
    
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-pText p-3">
        {typeof imageSrc === "string" ? (
          <img src={imageSrc} alt={alt} className={className} />
        ) : (
          imageSrc
        )}
      </div>

     
      <div>
        <h2 className="font-inter text-text30 font-bold text-blueText leading-none">
          {number}
        </h2>
        <p className="mt-2 font-roboto text-text16 font-medium text-lightBlackText">
          {label}
        </p>
      </div>
    </div>
    </>
  )
}

export default CounteerCard
