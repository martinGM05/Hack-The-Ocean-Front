const Card = ({data}) => {

    return ( 
        
        <div className="card">
            <span class={`is-pulled-right tag is-${data.problematica == 3 ? 'danger' : data.problematica == 2 ? 'warning' : 'warning is-light'}`}>
                Problematica nivel: {data.problematica}
            </span>
            <div className="card-content">
                <div className="media">
                    
                    <div className="media-left">
                    <figure class="image is-128x128">
                        <img class="" src={data.img}/>
                    </figure>
                    </div>
                <div className="media-right my-5">
                    <p className="title is-4">{data.nombre}</p>
                </div>
                </div>

                <div className="content">
                <p>
                    {data.descripcion}
                </p>

                <footer class="card-footer">
                    <a href="#" class="card-footer-item">{data.estado[0].nombre}</a>
                    <a href="#" class="card-footer-item">{data.tipo[0].nombre}</a>
                    <a href="#" class="card-footer-item">{data.habitad[0].nombre}</a>
                </footer>
                </div>
        </div>
        </div>
     );
}
 
export default Card;