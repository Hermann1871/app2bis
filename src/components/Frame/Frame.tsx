import "./Frame.css";

type FrameProps= {
    children? : JSX.Element
}

export const Frame = (props: FrameProps ) => {

    return (
        <div className="frame">
           <>{props.children}</> 
        </div>




    )
}