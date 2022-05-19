import { useState } from 'react'

import { Footer, Loader, Text, Toolbar } from 'components'

import * as S from './styles'

export const PrivacyPoliciesPage: React.FC = () => {
  const [loading, setLoading] = useState(false)

  return (
    <S.Wrapper>
      <Toolbar setLoading={setLoading} />

      <div className="content">
        {loading && <Loader />}

        <Text variant="title">🕵 Políticas de Privacidade</Text>
        <Text>
          A sua privacidade é importante para nós. É política do Terminal de
          Ibirité respeitar a sua privacidade em relação a qualquer informação
          sua que possamos coletar no site Terminal de Ibirité, e outros sites
          que possuímos e operamos.
        </Text>
        <Text>
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
        </Text>
        <Text>
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, protegemos
          dentro de meios comercialmente aceitáveis para evitar perdas e roubos,
          bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </Text>
        <Text>
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
        </Text>
        <Text>
          O nosso site pode ter links para sites externos que não são operados
          por nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas políticas de privacidade.
        </Text>
        <Text>
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados.
        </Text>
        <Text>
          O uso continuado de nosso site será considerado como aceitação de
          nossas práticas em torno de privacidade e informações pessoais. Se
          você tiver alguma dúvida sobre como lidamos com dados do usuário e
          informações pessoais, entre em contacto connosco.
        </Text>
        <Text variant="title">🍪 Política de Cookies Terminal de Ibirité</Text>
        <Text variant="subtitle">O que são cookies?</Text>
        <Text>
          Como é prática comum em quase todos os sites profissionais, este site
          usa cookies, que são pequenos arquivos baixados no seu computador,
          para melhorar sua experiência. Esta página descreve quais informações
          eles coletam, como as usamos e por que às vezes precisamos armazenar
          esses cookies. Também compartilharemos como você pode impedir que
          esses cookies sejam armazenados, no entanto, isso pode fazer o
          downgrade ou quebrar certos elementos da funcionalidade do site.
        </Text>
        <Text variant="subtitle">Como usamos os cookies?</Text>
        <Text>
          Utilizamos cookies por vários motivos, detalhados abaixo.
          Infelizmente, na maioria dos casos, não existem opções padrão do setor
          para desativar os cookies sem desativar completamente a funcionalidade
          e os recursos que eles adicionam a este site. É recomendável que você
          deixe todos os cookies se não tiver certeza se precisa ou não deles,
          caso sejam usados para fornecer um serviço que você usa.
        </Text>
        <Text variant="subtitle">Desativar cookies</Text>
        <Text>
          Você pode impedir a configuração de cookies ajustando as configurações
          do seu navegador (consulte a Ajuda do navegador para saber como fazer
          isso). Esteja ciente de que a desativação de cookies afetará a
          funcionalidade deste e de muitos outros sites que você visita. A
          desativação de cookies geralmente resultará na desativação de
          determinadas funcionalidades e recursos deste site. Portanto, é
          recomendável que você não desative os cookies.
        </Text>
        <Text variant="subtitle">Cookies de Terceiros</Text>
        <Text>
          Em alguns casos especiais, também usamos cookies fornecidos por
          terceiros confiáveis. A seção a seguir detalha quais cookies de
          terceiros você pode encontrar através deste site.
        </Text>
        <ul>
          <li>
            <Text>
              Este site usa o Google Analytics, que é uma das soluções de
              análise mais difundidas e confiáveis da Web, para nos ajudar a
              entender como você usa o site e como podemos melhorar sua
              experiência. Esses cookies podem rastrear itens como quanto tempo
              você gasta no site e as páginas visitadas, para que possamos
              continuar produzindo conteúdo atraente.
            </Text>
          </li>
        </ul>
        <Text>
          Para mais informações sobre cookies do Google Analytics, consulte a
          página oficial do Google Analytics.
        </Text>
        <ul>
          <li>
            <Text>
              As análises de terceiros são usadas para rastrear e medir o uso
              deste site, para que possamos continuar produzindo conteúdo
              atrativo. Esses cookies podem rastrear itens como o tempo que você
              passa no site ou as páginas visitadas, o que nos ajuda a entender
              como podemos melhorar o site para você.
            </Text>
          </li>
          <li>
            <Text>
              Periodicamente, testamos novos recursos e fazemos alterações
              subtis na maneira como o site se apresenta. Quando ainda estamos
              testando novos recursos, esses cookies podem ser usados para
              garantir que você receba uma experiência consistente enquanto
              estiver no site, enquanto entendemos quais otimizações os nossos
              usuários mais apreciam.
            </Text>
          </li>
          <li>
            <Text>
              À medida que vendemos produtos, é importante entendermos as
              estatísticas sobre quantos visitantes de nosso site realmente
              compram e, portanto, esse é o tipo de dados que esses cookies
              rastrearão. Isso é importante para você, pois significa que
              podemos fazer previsões de negócios com precisão que nos permitem
              analizar nossos custos de publicidade e produtos para garantir o
              melhor preço possível.
            </Text>
          </li>
          <li>
            <Text>
              O serviço Google AdSense que usamos para veicular publicidade usa
              um cookie DoubleClick para veicular anúncios mais relevantes em
              toda a Web e limitar o número de vezes que um determinado anúncio
              é exibido para você. Para mais informações sobre o Google AdSense,
              consulte as FAQs oficiais sobre privacidade do Google AdSense.
            </Text>
          </li>
          <li>
            <Text>
              Utilizamos anúncios para compensar os custos de funcionamento
              deste site e fornecer financiamento para futuros desenvolvimentos.
              Os cookies de publicidade comportamental usados por este site
              foram projetados para garantir que você forneça os anúncios mais
              relevantes sempre que possível, rastreando anonimamente seus
              interesses e apresentando coisas semelhantes que possam ser do seu
              interesse.
            </Text>
          </li>
          <li>
            <Text>
              Vários parceiros anunciam em nosso nome e os cookies de
              rastreamento de afiliados simplesmente nos permitem ver se nossos
              clientes acessaram o site através de um dos sites de nossos
              parceiros, para que possamos creditá-los adequadamente e, quando
              aplicável, permitir que nossos parceiros afiliados ofereçam
              qualquer promoção que pode fornecê-lo para fazer uma compra.
            </Text>
          </li>
        </ul>
        <Text variant="subtitle">Compromisso do Usuário</Text>
        <Text>
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que o Terminal de Ibirité oferece no site e com caráter
          enunciativo, mas não limitativo:
        </Text>
        <ul>
          <li>
            <Text>
              A) Não se envolver em atividades que sejam ilegais ou contrárias à
              boa fé a à ordem pública;
            </Text>
          </li>
          <li>
            <Text>
              B) Não difundir propaganda ou conteúdo de natureza racista,
              xenofóbica, Onde ver a Bola ou azar, qualquer tipo de pornografia
              ilegal, de apologia ao terrorismo ou contra os direitos humanos;
            </Text>
          </li>
          <li>
            <Text>
              C) Não causar danos aos sistemas físicos (hardwares) e lógicos
              (softwares) do Terminal de Ibirité, de seus fornecedores ou
              terceiros, para introduzir ou disseminar vírus informáticos ou
              quaisquer outros sistemas de hardware ou software que sejam
              capazes de causar danos anteriormente mencionados.
            </Text>
          </li>
        </ul>
        <Text variant="subtitle">Mais informações</Text>
        <Text>
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se
          houver algo que você não tem certeza se precisa ou não, geralmente é
          mais seguro deixar os cookies ativados, caso interaja com um dos
          recursos que você usa em nosso site.
        </Text>
        <Text>Esta política é efetiva a partir de Março/2022.</Text>
      </div>

      <Footer />
    </S.Wrapper>
  )
}
