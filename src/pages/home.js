import Header from "../components/header";
import Banner from "../components/banner";
import About from "../components/about";
import Blogs from "../components/blogs";
import PhotoGallery from "../components/photoGallery";
import Container from "../components/container";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Blogs />
      <PhotoGallery />
      <Container />
      <Footer />
    </div>
  );
}

export default Home;
