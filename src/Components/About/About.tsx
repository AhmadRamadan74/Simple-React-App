export default function About() {
    return (
    <>
        <section className='bg-[#1ABC9C] h-[97vh] text-white flex justify-center items-center flex-col gap-5'>
            <div className="about-heading">
                <h1 className='uppercase text-[40px] font-semibold'>About Component</h1>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <div className='bg-white w-[100px] h-[5px]'></div>
                <i className='fa fa-star'></i>
                <div className='bg-white w-[100px] h-[5px]'></div>
            </div>

            <div className="about-content flex justify-around gap-8">
                <p className='w-[550px]'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className='w-[550px]'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </section>
    </>
)
}
