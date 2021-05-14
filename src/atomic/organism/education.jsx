import Event from "../molecule/event/event"
import { Item, List } from "../template/list/list"
import Section from "../template/section/section"
import { Tag, TagGroup } from "../atom/tag/tag"

const Education = () => (
    <Section title="Education">
        <Event
            role="Game Design"
            company="World Academy Portugal"
            start="2015"
            end="2016"
        />
        <Event
            role="M.S. in Electronics and Telecomunication Engineering"
            company="Instituto Superior de Engenharia de Lisboa"
            start="2009"
            end="2013"
        >
            <span>Thesis</span>
            <List>
                <Item>
                    Many-Core Approach to 2D-DCT Calculation Using an FPGA
                </Item>
            </List>
            <TagGroup>
                <Tag>C/C++</Tag>
                <Tag>VHDL</Tag>
                <Tag>FPGA</Tag>
            </TagGroup>
        </Event>
        <Event
            role="B.S. in Electronics, Telecomunication and Computer Engineering"
            company="Instituto Superior de Engenharia de Lisboa"
            start="2006"
            end="2009"
        >
            <span>Final project</span>
            <List>
                <Item>
                    Temperature and Humidity Data Logger
                </Item>
            </List>
            <TagGroup>
                <Tag>C</Tag>
                <Tag>PIC32</Tag>
            </TagGroup>
        </Event>
    </Section>
)

export { Education }