
type containerProps = {

    value: number
}

export const Container =
    (props: containerProps) => {
        return <li>{props.value}</li>
    }
