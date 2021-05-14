import "./list.scss"

const List = ({ children }) => (
    <ul className="cv-list">
        {children}
    </ul>
)

const Item = ({ children }) => (
    <li>
        {children}
    </li>
)

export { List, Item }