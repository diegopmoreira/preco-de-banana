"use strict";

var afiliados = [{
  title: "Como Ganhar Dinheiro Com OLX",
  descricao: "Neste curso você aprenderá a ser um revendedor de sucesso, usando técnicas de gatilhos mentais e persuasão para obter êxito e lucro em todas as negociações na OLX. É um treinamento completamente dinâmico, onde eu literalmente não sabia o que aconteceria nas próximas aulas, apenas para mostrar que as técnicas aqui ensinadas são realmente eficazes. Você vai aprender a encontrar pessoas desesperadas por dinheiro que aceitarão qualquer proposta e da mesma forma revenderá pelo seu preço justo, encontrando rapidamente o COMPRADOR CERTO. Tudo isso com técnicas de otimização de anúncios, para que seu produto venda RÁPIDO, deixando concorrentes comer poeira. Venha ser um revendedor de sucesso e multiplique seu dinheiro na OLX!",
  link: "https://go.hotmart.com/X10833154H"
}, {
  title: "Curso - Render 100% Revit",
  descricao: "Sem segredos! Curso sobre renderização completamente em Revit Construção do loft Aplicação de texturas Dicas de iluminação artificial Iluminação natural Como criar render 360º grátis pela autodesk Como criar QR Code Gerar PDF Projeto de interiores",
  link: "https://go.hotmart.com/U10833167S"
}, {
  title: "Curso de PHP Developer",
  descricao: "O curso de PHP Developer vai abordar desde o básico até o avançado, apresenta como iniciar o desenvolvimento em PHP, os programas necessário e os principais recursos do PHP, abordando o PHP Orientado a Objetos, junto o PDO. Em seguida o curso de PHP Developer apresenta o passo a passo como criar estruturar de um sistema do zero com PHP utilizando o padrão de desenvolvimento MVC: Model, View e Controller",
  link: "https://go.hotmart.com/X10833155O"
}, {
  title: "Jogo da Memória Católico",
  descricao: "Jogo da memória já é divertido por si só, agora imagina um joguinho católico em que as crianças aprendem enquanto se divertem? Receba esse Joguinho Inédito com mais de 30 peças; tem os Santos e devoções especiais.",
  link: "https://go.hotmart.com/X10833126Y"
}, {
  title: "Profissão Criativo: Processo de Criação Para Designers",
  descricao: "Desbloqueie Sua Criatividade e Tenha Um Processo Criativo Bem Definido! Pra nunca mais ter medo do papel em branco ou dificuldade para resolver um briefing. Criatividade é o motor do Designer. Sem ela, viramos máquinas ambulantes, de repetição de clichês. Ah, e saiba que Criatividade não é dom, nunca foi, é pura técnica e habilidade. E como qualquer habilidade existem formas práticas e científicas de desenvolvê-la. O que eu vou propor para você aqui é o seguinte, eu tenho um curso onde eu ensino de maneira prática a você desenvolver a criatividade e ter processos criativos muito bem definidos. Pra nunca mais ter medo do papel em branco, ou de um briefing muito complicado.",
  link: "https://go.hotmart.com/X10833153S"
}, {
  title: "Profissional HD",
  descricao: "Um curso para te dar uma definição clara do que é um Profissional de Alta Performance e um caminho para você alcançar o êxito na sua carreira. Depois do grande sucesso do Curso Líder HD, Michael traz sua abordagem diferenciada para te mostrar o que é um Profissional de alto nível, como se preparar para performar no máximo, conseguir resultados, reconhecimento e êxito profissional.",
  link: "https://go.hotmart.com/H10858339Y"
}, {
  title: "Short-Term USA - Sublocação de Imóveis",
  descricao: "Short-Term é o sistema utilizado para locação de curto prazo. Nesse curso iremos te ensinar como ganhar milhares de dólares locando imóveis e sublocando para turistas e pessoas que precisam se hospedar por uma curta temporada. Tudo isso respeitando todas as leis e com análise da ocupação dos locais mais prósperos para se investir. Esse será o único curso que você encontrará onde o seu resultado financeiro no primeiro mês pagará todo o seu investimento com esse magnífico aprendizado e como sempre daremos para você 7 (sete) para você conhecer esse curso espetacular e caso o produto não atenda o seu perfil, você poderá cancelar sem a necessidade de explicar os seus motivos. Não perca tempo e comece a ganhar dinheiro nessa indústria que fez da empresa AirBnb uma Gigante Bilionária. Venha você também mudar a sua vida ajudando pessoas que desejam se hospedar bem e pagando pouco!!! Estamos Juntos e Juntos Somos Mais Fortes",
  link: "https://go.hotmart.com/P10858338F"
}];
$(document).ready(function () {
  var i;
  $("#afiliados ul").empty();

  for (i = 0; i < 4; i++) {
    $("#afiliados ul").append("<li class=\"afiliado\"><h2>".concat(afiliados[i].title, "</h2><p>").concat(afiliados[i].descricao, "</p>  <h3>Preview</h3><iframe    src=\"").concat(afiliados[i].link, "\"    frameborder=\"0\"    sandbox=\"allow-popups\"  ></iframe></li>"));
  }

  $("#menu img").click(function () {
    $("li.display-none").slideToggle();
  });
  $("#quero-mais").click(function () {
    console.log(i);

    for (i = i; i < i + 4; i++) {
      $("#afiliados ul").append("<li class=\"afiliado\"><h2>".concat(afiliados[i].title, "</h2><p>").concat(afiliados[i].descricao, "</p>  <h3>Preview</h3><iframe    src=\"").concat(afiliados[i].link, "\"    frameborder=\"0\"    sandbox=\"allow-popups\"  ></iframe></li>"));
    }
  });
});