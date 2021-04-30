import Button from "./Button"

const Header = ({ color, title, showAdd, onShowAdd }) => {

    return (
        <Header className="Header">
            <h2 style={{ color: color }}>{title}</h2>

            <Button
                color={showAdd ? "red" : "green"}
                text={showAdd ? "close" : "open"}
                onClick={onShowAdd}
            />
        </Header>
    )
};


Header.defaultProps = {
    title: "todo list",
    color: "black"
}
export default Header
