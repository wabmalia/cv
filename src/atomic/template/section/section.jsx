import "./section.scss"

const Section = ({ children, title }) => (
    <section className="cv-section">
        <h2>{title}</h2>
        {children}
    </section>
)

export default Section