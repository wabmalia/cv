import { Language } from "../molecule/language/language"
import Section from "../template/section/section"

const Languages = () => (
    <Section title="Languages">
        <Language name="Portuguese" rate={5} />
        <Language name="English" rate={4} />
    </Section>
)

export { Languages }