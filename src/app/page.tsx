import Courses from "@/components/courses/course";
import Footer from "@/components/footer/footer";
import Hero from "@/components/herosection/hero";
import Nav from "@/components/navbar/nav";
import Programmes from "@/components/programoutcome/programes";

import Tracks from "@/components/Tracks/Tracks";
import Meta from "./pages/meta/page";


export default function Home() {
  return (
<div>
<Nav/>
<Hero/>
<Courses/>
<Tracks/>
<Programmes/>
<Footer/>
<Meta/>
</div>
  );
}
