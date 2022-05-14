import {Link} from 'react-router-dom';


const Card = ({data}) => {


    return ( 
        
        <div className="card" style={{'height':'20rem'}}>
            <span className={`is-pulled-right tag is-${data.problematica == 3 ? 'danger' : data.problematica == 2 ? 'warning' : 'warning is-light'}`}>
                Problematica nivel: {data.problematica}
            </span>
            <div 
            className="card-content">
                <div className="media">
                    
                    <div className="media-left">
                    <figure className="image is-128x128">
                        <img className="" src={data.img}/>
                    </figure>
                    </div>
                <div className="media-right my-5">
                    <Link to = {`/animal/${data._id}`}
                     className="title is-4">{data.nombre}</Link>
                </div>
                </div>

                <div className="content">
                <p>
                    {
                        data.descripcion.length > 99 ?
                        data.descripcion.substring(0,99) + '...'
                        :
                        data.descripcion
                    }
                </p>

                <footer className="card-footer">
                    <a href="#" className="card-footer-item">{data.estado[0].nombre}</a>
                    <a href="#" className="card-footer-item">{data.tipo[0].nombre}</a>
                    <a href="#" className="card-footer-item">{data.habitad[0].nombre}</a>
                </footer>
                </div>
        </div>
        </div>
     );
}
 
export default Card;