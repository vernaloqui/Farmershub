function Banner(prop){
    return(
    <section>
        <div className="container-fluid d-flex m-auto p-0">
            <img src={prop.img} alt="banner" className="d-block w-100"/>
        </div><br></br>
    </section>
    )
}
export default Banner;