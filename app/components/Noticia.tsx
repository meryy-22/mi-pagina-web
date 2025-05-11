
interface INoticia{
titulo: String
descripcion: String
}

export default function Noticia({titulo,descripcion}: INoticia) {
    return (
        <div className={'flex:flex-col m-4 border'}>
            <h2>{titulo}</h2>
            <p>
                {descripcion}
            </p>
    </div>
    )
}


