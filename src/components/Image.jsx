
const Imasge = ({imageSrc, imageAlt, className}) => {
  return (
   <div>
     <img src={imageSrc} alt={imageAlt} className={className} />
   </div>
  )
}

export default Imasge