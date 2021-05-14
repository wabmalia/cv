import "./language.scss"

const Language = ({ name, rate }) => (
    <div className="cv-language">
        <h4>{name}</h4>
        <div className="cv-language-rate">
            {
                new Array(rate).fill("⚫️")
                    .concat(new Array(5 - rate).fill("⚪️"))
                    .map((rate, idx) => <div key={`rate-${name}-${idx}`}>{rate}</div>)
            }
        </div>
    </div>
)

export { Language }