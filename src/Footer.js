const Footer = () => {
    return(
        <>
        <div className="container footer">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-2 mt-2 text-center">Socials:
             <div className="row icons mt-4">
                <div className="col-1">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" className="instagram" width="25" />
                  </div>
                  <div className="col-1"></div>
                <div className="col-1">
                  <img src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png" alt="" className="instagram" width="25" />
                  </div>
                  <div className="col-1"></div>

                  <div className="col-1">
                  <img src="https://cdn-icons-png.flaticon.com/512/4494/4494477.png" alt="" className="instagram" width="25" />
                  </div>
                  <div className="col-1"></div>

                  <div className="col-1">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="" className="instagram" width="25" />
                  </div>
                  <div className="col-1"></div>

                </div>

             </div>
             <div className="col-1"></div>

            <div className="col-4 mt-2 "><h5 className="text-center">Andere Pokemon plekken</h5>
            <ul className="pokemon-places text-end">
                <li className="pokemon-places-list-item">Pokemon.com</li>
                <li className="pokemon-places-list-item">Dikke turbo</li>
                <li className="pokemon-places-list-item">Floepie</li>
                <li className="pokemon-places-list-item">Doebie</li>

            </ul>
            
            
            </div>


        </div></div>
        </>
    )

}

export default Footer;