export default function Card(props) {
    return (
        <div
            class="p-5 bg-[rgb(20,20,20)]"
            classList={{"rounded-md": props.rounded, "shadow-md": !props.flat, "bg-[rgb(25,25,25)]": props.inner}}
        >
            {props.children}
        </div>
    )
}