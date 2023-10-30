import Footer from "../components/Footer"
import Header from "../components/Header"
import '../css/Blog.css'

const Blog = () => {
    return (
        <>
            <Header />
            <section className="banner-blog">
                <h1>BLOG IGNEAS</h1>
            </section>
            <section className="blog-desc">
                <h2>AQUÍ VA LA DESCRIPCIÓN</h2>
            </section>
            <section className="blog-secciones">
                <h2>Secciones</h2>
                <div className="blog-secciones_grid">
                    <div className="card-seccion">
                        <h3>SELVA</h3>
                    </div>
                    <div className="card-seccion">
                        <h3>APA!</h3>
                    </div>
                    <div className="card-seccion">
                        <h3>NOTICIAS</h3>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Blog
