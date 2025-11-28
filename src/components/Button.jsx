export default function Button({ name = "Button", icon, url = "#" }) {
    return (
        <a href={url} target="_blank" className="btn">
            <img src={icon} alt="icon" className="icn" />
            {name}
        </a>
    );
}