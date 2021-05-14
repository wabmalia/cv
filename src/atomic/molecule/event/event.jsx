import "./event.scss"

const Event = ({ children, role, company, start, end, location, tags }) => (
    <article className="cv-event">
      <header>
        <h3>
          {role}
        </h3>
        <h4>
          {company}
        </h4>
        <div className="info">
          <span>{start} - {end}</span>
          {location && <span>{location}</span>}
        </div>
      </header>
      <div className="content">
        {children}
      </div>
    </article>
  )

  export default Event