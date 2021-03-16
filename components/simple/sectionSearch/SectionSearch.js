import styled from 'styled-components';
import HeadSectionSearch from "../headSectionSearh/HeadSectionSearch";
import Picture from "../picture/Picture";
import Row from "../../../containers/row/Row";
import Col2 from "../../../containers/col2/Col2";
import Inner from "../../../containers/inner/Inner";
import Text from "../text/Text";
import Background from "../background/Background";

const Box = styled.div`
  background: rgba(254,236,0,.8);
  padding: 3rem;
  margin: 40 0;
`

const SectionSearch = (props) => {
    return <Box>
        <Inner className="twoColumns">
            <Col2>
                <Row>
                    <HeadSectionSearch text="Выбирай надёжные новостройки!"/>
                    <Picture src="/blobShape_lt.svg" alt="Random picture" className="top-left"/>
                </Row>
                <Row>
                    <Picture src="/catOk.png" alt="Cat"/>
                    <Text>Привет, меня зовут Билд! Наш индекс надёжности новостройки поможет выбрать надёжный ЖК.
                        Индекс суровый, прозрачный и справедливый.
                    </Text>
                </Row>
            </Col2>
            <Col2>
                <Background>
                   {/* <Picture src="/blobShape_rl.svg" alt="Пятно"/>
                    <Picture src="/blobShape_rb.svg" alt="Пятно"/>*/}
                </Background>

            </Col2>
        </Inner>

    </Box>
}

export default SectionSearch