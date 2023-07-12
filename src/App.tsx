import {
  BigNumber,
  Button,
  ButtonContainer,
  ButtonHotmart,
  ButtonText,
  Center,
  Circles,
  Icon,
  Limit,
  SafeBuy,
  SectionTitle,
  SectionWillBe,
  Subtitle,
  Topic,
  TopicTitle,
  Underline,
  Title,
  Yellow,
  TopicDescription,
  BackgroundContainer,
  SectionMainAsks,
  AccordionContainer,
  AccordionHeader,
  AccordionBody,
  AccordionTitle,
  AccordionDescription,
  Arrow,
  Footer,
  FooterTitle,
  FooterText,
  FooterLimit,
  SectionDiscount,
  DiscoutTextStart,
  DiscoutPercentage,
  DiscountDownPercentage,
  ContainerColumn,
  DiscoutUser,
  DiscountName,
  SectionSubtitle, ExternalUrl
} from "./App";
// @ts-ignore
import mvfIcon from './assets/mvf-icon.svg'
// @ts-ignore
import safeBuy from './assets/safe-buy.svg'
// @ts-ignore
import arrow from './assets/arrow.svg'
import {asks, topics} from "./utils/mocks";
import {useState} from "react";

function App() {

  const [opened, setOpened] = useState<string>('');

  return (
    <Center>
      <Limit>
        <BackgroundContainer>
          <Circles color="#6800CF" size={100} top={130} left={30}></Circles>
          <Circles color="#0FCD4F" size={120} top={220} right={50}></Circles>
          <Circles color="#6800CF" size={110} bottom={200} left={20}></Circles>
          <Circles color="#FFEB34" size={100} bottom={160} right={30}></Circles>
        </BackgroundContainer>
        <Icon src={mvfIcon} alt="melhor-você-focar-icon" />
        <Title>Aprenda a <Yellow>concentrar-se</Yellow> melhor e alcance seus <Yellow>objetivos</Yellow> com nosso e-book de melhoria do <Yellow>foco</Yellow></Title>
        <Subtitle>
          <Underline>Você já se sentiu sobrecarregado com as demandas constantes da vida moderna?</Underline> <Yellow>Deseja encontrar uma maneira de se concentrar nas tarefas importantes e alcançar seus objetivos com mais facilidade?</Yellow> Se sim, nosso e-book sobre como ter foco é perfeito para você. <Yellow>Aprenda as habilidades essenciais para superar distrações, melhorar sua produtividade e desbloquear todo o seu potencial.</Yellow>
        </Subtitle>

        <ButtonHotmart onClick={() => {
          return false}
        } href="https://pay.hotmart.com/C84476346T"
                       className="hotmart-fb hotmart__button-checkout">
          <ButtonContainer>
            <Button>
              <ButtonText>
                COMPRAR E-BOOK AGORA
              </ButtonText>
            </Button>
          </ButtonContainer></ButtonHotmart>
        <SafeBuy src={safeBuy} />

        <SectionTitle>O que vai mudar?</SectionTitle>
        <SectionWillBe>
          {topics.map((item,index) => (
            <Topic>
              <BigNumber>{index + 1}</BigNumber>
              <TopicTitle>{item.title}</TopicTitle>
              <TopicDescription>{item.description}</TopicDescription>
            </Topic>
          ))}
        </SectionWillBe>
        <ButtonHotmart onClick={() => {
          return false}
        } href="https://pay.hotmart.com/C84476346T"
                       className="hotmart-fb hotmart__button-checkout">
          <ButtonContainer>
            <Button>
              <ButtonText>
                COMPRAR E-BOOK AGORA
              </ButtonText>
            </Button>
          </ButtonContainer></ButtonHotmart>
        <SafeBuy src={safeBuy} />

        <SectionTitle>Perguntas frequentes</SectionTitle>
        <SectionMainAsks>

          {asks.map((item, index) => (
            <AccordionContainer>
              <AccordionHeader
                onClick={() => {
                  setOpened(opened === String(index + 1) ? '' : String(index + 1))
                }}
              >
                <AccordionTitle>
                  {item.title}
                </AccordionTitle>
                <Arrow src={arrow} top={index + 1 === +opened}/>
              </AccordionHeader>
              <AccordionBody open={index + 1 === +opened}>
                <AccordionDescription>
                  {item.description}
                </AccordionDescription>
              </AccordionBody>
            </AccordionContainer>
          ))}

        </SectionMainAsks>
        <ButtonHotmart onClick={() => {
          return false}
        } href="https://pay.hotmart.com/C84476346T"
                       className="hotmart-fb hotmart__button-checkout">
          <ButtonContainer>
            <Button>
              <ButtonText>
                COMPRAR E-BOOK AGORA
              </ButtonText>
            </Button>
          </ButtonContainer></ButtonHotmart>
        <SafeBuy src={safeBuy} />

        <SectionTitle>BONUS</SectionTitle>
        <SectionSubtitle>Um presente para você...</SectionSubtitle>
        <SectionDiscount>
          <DiscoutTextStart>Você acaba <br/> de ganhar</DiscoutTextStart>
          <ContainerColumn>
            <DiscoutPercentage>30%</DiscoutPercentage>
            <DiscountDownPercentage>DE DESCONTO</DiscountDownPercentage>
          </ContainerColumn>
          <DiscoutUser>USE O <br/>CUPOM:</DiscoutUser>
          <DiscountName>FOQUEI</DiscountName>
        </SectionDiscount>
      </Limit>
      <Footer>
        <FooterLimit>
          <FooterTitle>Politica de Privacidade | Termos de uso | Contato</FooterTitle>

          <FooterText>Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.</FooterText>

          <FooterText>Para garantir que as estratégias tragam resultados, é necessário aplicar todos os ensinamentos conforme o recomendado. Os resultados podem variar e dependem unicamente de cada pessoa em colocar em prática as estratégias aprendidas. Lembre-se que cada um tem sua individualidade, experiência e rotinas, não compare seu resultado com o de outros e siga dando o seu melhor todos os dias. A chave para ter resultados e sucesso é a consistência.</FooterText>

          <FooterText>Todos os direitos reservados para: Melhor você focar – 2023</FooterText>
        </FooterLimit>
      </Footer>
    </Center>
  )
}

export default App
