import "./tag.scss"

const Tag = ({ children }) => <span className="cv-tag">{children}</span>
const TagGroup = ({ children }) => <div className="cv-tag-group">{children}</div>

export { Tag, TagGroup }