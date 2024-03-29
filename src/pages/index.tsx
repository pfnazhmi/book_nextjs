import Head from "next/head";
import{Hero, Navbar, Popular, Footer, Latest, Testimonials, Subscribe} from "../components"


export default function Home() {
  return (
    <div>
      <Head>
      <title>Bookwebs</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>
    
      <main className="bg-white">
        <div className="px-10">
          <Navbar/>
          <Popular/>
          <Latest/>
          <Subscribe/>
          <Testimonials/>
          <Footer/>
        </div>
     
    </main>
    </div>

   
  );
}
