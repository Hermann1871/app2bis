import "./card.css";

export const Card = (props: {
    title: string,
    subtitle: string,
    placeholder: boolean
    imgURL: string
}) => {

    return (


        <div className="card">
            <img src={props.imgURL} alt="Avatar" />
            <div className="container">
                <h4><b>{props.title}</b></h4>
                <p>{props.subtitle}</p>
                {props.placeholder && <p>Open to work</p>}
            </div>
        </div>




    )
}