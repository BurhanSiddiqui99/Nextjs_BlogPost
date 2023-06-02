import Image from "next/image";
import classes from './hero.module.css';
export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/pic.jpg" alt="This is profile Image" width={300} height={300} />
            </div>
            <h1>Hi, This is Burhan Siddiqui</h1>
            <p>
                This is blog post project using Next.js 
            </p>
            <p>I'm also a frontend developer using Nextjs & Reactjs</p>
        </section>
    )
}