import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './Portfolio.scss'
import { useRef } from 'react';

const array=[

        {
            id:10,
            title: "E-Commerce Website",
            img: "https://i.postimg.cc/KYxb1MM3/image-2024-04-18-180324534.png",
            des:"Dive into a world of essentials and luxuries, where browsing meets simplicity. With features like Wishlist and Cart seamlessly integrated, enjoy the ease of adding favorites and managing purchases. Elevate your shopping experience with React's efficiency and our intuitive design.",
            link: "https://e-commerce-store-woad-ten.vercel.app"

        },
        {
            id:9,
            title: "Media Player",
            img: "https://i.postimg.cc/rmy8CRWB/image-2024-03-24-154821253.png",
            des:"Step into a world of vibrant timekeeping with our React Stopwatch Project! Featuring a sleek and dynamic UI design, this stopwatch promises to make time tracking a visually stimulating experience. Perfect for all your timing needs, , this project combines functionality with a burst of color and energy.",
            link: "https://media-player-front.vercel.app"

        },
        {
            id:8,
            title: "Timer App",
            img: "https://i.postimg.cc/L5mjJ6J8/image-2024-03-24-134339612.png",
            des:"Step into a world of vibrant timekeeping with our React Stopwatch Project! Featuring a sleek and dynamic UI design, this stopwatch promises to make time tracking a visually stimulating experience. Perfect for all your timing needs, , this project combines functionality with a burst of color and energy.",
            link: "https://timer-johngeorge.netlify.app"

        },
        {
            id:7,
            title: "Travel Blog",
            img: "https://i.postimg.cc/8Pyq47BM/image-2024-03-24-134027655.png",
            des:"In this exciting journey, I harnessed the power of HTML, CSS, and Bootstrap to bring to life a visually stunning and user-friendly platform for a Travel Blog. The objective was to recreate an immersive experience that transports visitors to the mesmerizing destinations explored by the blogger.",
            link: "https://johngeorge1603.github.io/Travel-Blog"

        },
        {
            id:6,
            title: "Movie Databse",
            img: "https://i.postimg.cc/j2frmtxt/image-2024-03-24-133817498.png",
            des:"Experience the magic of cinema with this Movie API Fetching project! Utilizing HTML, CSS, and JavaScript, I've created a seamless platform to browse and discover your favorite films effortlessly. Dive into a world of endless entertainment as you explore our curated selection of movies right at your fingertips",
            link: "https://johngeorge1603.github.io/Movie-API"

        },
        {
            id:5,
            title: "Calculator",
            img: "https://i.postimg.cc/SQzMBsZb/image-2024-03-24-150726981.png",
            des:"Unlock the power of computation with our React Calculator App! Seamlessly blending functionality with an elegant user interface, this app offers a dynamic solution for all your mathematical needs. Whether crunching numbers for work or school, our intuitive design ensures efficiency and accuracy.",
            link: "https://react-calc-john.netlify.app"

        },
        {
            id:4,
            title: "BMI Calculator",
            img: "https://i.postimg.cc/d3j5LxnG/image-2024-03-24-133857250.png",
            des:"This BMI Calculator project aims to provide a convenient and accessible tool for anyone interested in monitoring their health and fitness. By leveraging the power of HTML and JavaScript, I hope to create a user-friendly interface that simplifies the process of calculating BMI.",
            link: "https://johngeorge1603.github.io/BMI-Calculator"

        },
        {
            id:3,
            title: "Burger Company",
            img: "https://i.postimg.cc/q7zqFG0X/image-2024-03-24-133020340.png",
            des:"In this project, I delved into the realms of HTML, CSS, and Bootstrap to craft a visually enticing online platform for a Burger Cafe. The objective was to capture the essence of the cafe's offerings while ensuring a seamless and engaging user experience.",
            link: "https://johngeorge1603.github.io/The-Burger-Company"

        },
        {
            id:2,
            title: "Luminar Clone",
            img: "https://i.postimg.cc/XYWvVbWJ/image-2024-03-24-132751596.png",
            des:"In this endeavor, I dived into HTML, CSS, and Bootstrap to recreate the institutional webpage with precision and attention to detail. The goal was not just to replicate, but to capture the essence of the institution's online presence while enhancing it with modern design principles.",
            link: "https://johngeorge1603.github.io/Luminar-Webpage"

        },
        {
            id:1,
            title: "Headphone Store",
            img: "https://i.postimg.cc/rF76bcJK/image-2024-03-24-122002937.png",
            des:"In this exciting project, I leveraged HTML, CSS and Bootstrap to craft an engaging online space for a headphone store. Its designed with an aim to create a visually captivating interface that not only showcases the products but also provides an enjoyable browsing experience for users",
            link: "https://johngeorge1603.github.io/Headphone-Store"
        }
    ]

    const Single = ({ item }) => {

        const ref = useRef();
        const {scrollYProgress} = useScroll({target:ref})
        const y = useTransform(scrollYProgress, [0,1], [-600, 600])

        return (
          <section id={item.id} className="portfolio-item">
            <div className="container">
                <img src={item.img} alt=""  ref={ref} width={'50%'}/>
                <motion.div className="text-container" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.des}</p>
                    <button> <a href={item.link} target='_blank'>View Project <i class="fa-solid fa-caret-right fa-lg"></i></a></button>
                    <div style={{display:'flex' , flexDirection:'row', gap:'30px', justifyContent:'end'}}>
                    <a href="#HomePage"><i class="fa-solid fa-house fa-fade"></i></a>
                    <a href="#ContactPage"><i class="fa-solid fa-at fa-fade"></i></a>
                    </div>

                </motion.div>
            </div>
            
          </section>
        );
      };
      

function Portfolio() {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset:["end start", "start end"]})

    const scaleX = useSpring (scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

  return (
    <div className='portfolio' ref={ref} >
        <div className='progress'>
            <h1>
                projects
            </h1>

            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>

        <div className='projectBox'>
            {
               array.map (item=> (
                  <Single item={item}/>
                ))
            }
        </div>

        
            

    </div>
  )
}

export default Portfolio