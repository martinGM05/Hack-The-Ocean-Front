import Card from '../layouts/card';

const Content = () => {

    const animales = [
        {
            id: 1,
            nombre: 'Perro',
            img: 'https://images.ecestaticos.com/6uBjSmsBorRk6l_IHAxkBS1JCwE=/114x0:1997x1410/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F721%2F122%2F714%2F72112271431cb1078c3fe3e75ad5ab41.jpg',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            habitad: ['Calle'],
            estado: ['Veracruj 2'],
            tipo: ['Perro'],
            problematica: 3

        },
        {
            id: 2,
            nombre: 'Gato',
            img: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            habitad: ['Calle'],
            estado: ['Veracruj'],
            tipo: ['Miau'],
            problematica: 2
        },
        {
            id: 3,
            nombre: 'Lyon',
            img: 'https://okdiario.com/img/2019/08/10/-por-que-el-leon-es-el-rey-de-la-selva_-1.jpg',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            habitad: ['Calle'],
            estado: ['Veracruj'],
            tipo: ['Miau'],
            problematica: 1
        },
        {
            id: 4,
            nombre: 'Dino',
            img: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/6333ef91-eeff-4001-8b31-69ddbcc49237.862f2c9a9b698481d08ef9d18450d79f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            habitad: ['Calle'],
            estado: ['Veracruj'],
            tipo: ['Miau'],
            problematica: 1
        }
    ]

    return ( 
        <>
        <div className='container mx-auto my-2 columns is-multiline is-mobile'>
            {
                animales.map(animal => (
                    <div className='column is-one-third-desktop'>
                        <Card
                            key={animal.id}
                            data={animal}
                        />
                    </div>
                ))
            }
            
        </div>

        <nav class="container mx-auto my-5 pagination is-centered" role="navigation" aria-label="pagination">
            <a class="pagination-previous">Anterior</a>
            <a class="pagination-next">Siguiente</a>
        </nav>

        </>
     );
}
 
export default Content;