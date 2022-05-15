const Footer = () => {

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Woopas al rescate</strong> por Launch X.
        </p>
        <p>
          Una aplicación para ayudar a los animales que están en peligro de extinción
        </p>
        <div className="is-flex is-flex-direction-column">
          <a href="https://twitter.com/carlogilmar">
            <img src="https://i.ibb.co/SxJ9CdL/logo-hack-the-ocean.png" alt="Woopa por Carlo Gilmar" border="0" />
          </a>
          <span>Imágen por <a href="https://twitter.com/carlogilmar">Carlo Gilmar</a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;