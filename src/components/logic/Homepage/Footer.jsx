import react from "react";

function Footer(props){

    const year = new Date().getFullYear();
    return(
        <div>
            <footer>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Copyright&copy;GiordanAndrew {year}</p>
                            {/* <!-- Bootstrap Scripts --> */}
                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>                            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
                            {/* NOTE: NOT SURE IF I NEED TO ADD THIS SCRIPT YET */}
                            {/* <!-- Custrom Scripts --> */}
                            {/* <script src="scripts/helper.js"></script> */}
                        </div>
                    </div>
                </div>
                </footer>
        </div>
    );
}

export default Footer;