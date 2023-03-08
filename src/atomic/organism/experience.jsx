import Event from "../molecule/event/event"
import { Item, List } from "../template/list/list"
import Section from "../template/section/section"
import { Tag, TagGroup } from "../atom/tag/tag"

const Experience = () => (
    <Section title="Experience">
        <Event
            role="Software Engineer"
            company="Volkswagen Digital Solutions (SDC:LX)"
            start="Feb 2019"
            end="Ongoing"
            location="Rato, Lisboa, Portugal"
        >
            <List>
                <Item>
                    Identify internal needs in the Volkswagen world
                    and develop products with a customer centric view
                </Item>
                <Item>Pair programming</Item>
            </List>
            <TagGroup>
                <Tag>AWS</Tag>
                <Tag>Clojure</Tag>
                <Tag>Elixir</Tag>
                <Tag>Kotlin</Tag>
                <Tag>Node</Tag>
                <Tag>React</Tag>
                <Tag>TDD (Test driven development)</Tag>
                <Tag>User centric development</Tag>
                <Tag>XP (Extreme programming)</Tag>
            </TagGroup>
        </Event>
        <Event
            role="Software Engineer"
            company="Infinera (prev. Coriant)"
            start="July 2013"
            end="Feb 2019"
            location="Amadora, Portugal"
        >
            <List>
                <Item>
                    Implement new features for the proprietary NMS (Network Manager
                    Software)
                </Item>
                <Item>
                    Develop libraries that facilitate test development, debug and prototyping
                    new features
                </Item>
            </List>
            <TagGroup>
                <Tag>Java EE</Tag>
                <Tag>Maven</Tag>
                <Tag>Jenkins</Tag>
                <Tag>Docker</Tag>
                <Tag>Atlassian tools</Tag>
            </TagGroup>
        </Event>
        <Event
            role="System Engineer"
            company="VEET"
            start="Feb 2012"
            end="Feb 2013"
            location="Azambuja, Portugal"
        >
            <List>
                <Item>
                    Developed a system that automates bio-fuel production. Everything from the
                    user interface to the communication with PLDs (Programmable logic device)
                    that would manage motors/valves/sensors
                </Item>
            </List>
            <TagGroup>
                <Tag>Java</Tag>
            </TagGroup>
        </Event>
        <Event
            role="System Engineer"
            company="Primetec"
            start="Oct 2010"
            end="Jan 2012"
            location="Santa Iria, Portugal"
        >
            <List>
                <Item>
                    Developed an home automation solution for one of the major Portuguese
                    companies in the field
                </Item>
            </List>
            <TagGroup>
                <Tag>C</Tag>
            </TagGroup>
        </Event>
    </Section>
)

export { Experience }