const Footer = () => {
    return (
        <>
            <div className="container footer">

                <div className="row pt-3 pb-3">
                    <div className="col-3"></div>
                    <div className="col-2 mt-2 footer-socials ">
                        <h6 className="text-center">Socials:</h6>
                        <div className="row icons mt-4">
                            <div className="col-1">
                                <a href="/"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" className="instagram" width="25" /></a>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-1">
                                <a href="/"><img src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png" alt="" className="instagram" width="25" /></a>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-1">
                                <a href="/"><img src="https://cdn-icons-png.flaticon.com/512/4494/4494477.png" alt="" className="instagram" width="25" /></a>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-1">
                                <a href="/"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="" className="instagram" width="25" /></a>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>

                    <div className="col-2 mt-2">
                        <h6 className="">Handige links</h6>
                        <ul className="useful-links">
                            <li className="useful-links-list-item"><a href="/" className="link-light">Terms of Use</a></li>
                            <li className="useful-links-list-item"><a href="/" className="link-light">Privacy</a></li>
                            <li className="useful-links-list-item"><a href="/" className="link-light">Notice</a></li>
                            <li className="useful-links-list-item"><a href="/" className="link-light">Cookie Page</a></li>
                            <li className="useful-links-list-item"><a href="/" className="link-light">Legal Info</a></li>
                            <li className="useful-links-list-item"><a href="/" className="link-light">Security</a></li>
                        </ul>
                    </div>

                    <div className="col-2 mt-2 footer-places "><h6 className="text-center">Andere Pokemon plekken</h6>
                        <ul className="pokemon-places text-start">
                            <li className="pokemon-places-list-item"><a href="https://www.pokemon.com/us" className="link-light">Pokemon.com</a> </li>
                            <li className="pokemon-places-list-item"><a href="https://pokeapi.co/" className="link-light">Pokemon API</a></li>
                            <li className="pokemon-places-list-item"><a href="https://www.portal-pokemon.com/" className="link-light">Pokemon Startpagina</a></li>
                            <li className="pokemon-places-list-item"><a href="pokemon.com" className="link-light">Pokemon.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 text-center"><p className="copyright pt-2">Copyright 2023 - Nathan Kruit</p></div>
                </div>

            </div>
        </>
    )

}

export default Footer;