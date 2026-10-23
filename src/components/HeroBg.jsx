

const HeroBg = ({children}) => {
  return (
    <>
    <section className="mx-auto w-full max-w-[80%] bg-[#0c5344] text-white [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)]">
 {children}
</section>
    </>
  )
}

export default HeroBg