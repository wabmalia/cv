import Section from "../template/section/section"
import { Tag, TagGroup } from "../atom/tag/tag"

const Hobbies = () => (
    <Section title="Interests & hobbies">
        <TagGroup>
            <Tag>Travelling</Tag>
            <Tag>Video games</Tag>
            <Tag>Photography</Tag>
            <Tag>Reading</Tag>
            <Tag>Football</Tag>
        </TagGroup>
    </Section>
)

export { Hobbies }