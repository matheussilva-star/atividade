# Portfólio pessoal — instruções de preenchimento

Este projeto é o ponto de partida da sua página pessoal. Você vai trocar os
textos e as imagens de exemplo pelas suas informações e publicar no GitHub
Pages, num endereço como `https://seu-usuario.github.io`.

Tudo o que precisa ser trocado está marcado no código com a palavra
**ALTERE**. No VS Code, use `Ctrl + Shift + F` e procure por `ALTERE` para
achar todos os pontos de uma vez.

---

## 1. Antes de começar

1. Copie a pasta `portfolio-pessoal` inteira para o seu computador, fora da
   pasta de exercícios da disciplina.
2. Abra a pasta no VS Code e rode com o **Live Server** (botão direito no
   `index.html` → *Open with Live Server*).
3. Deixe o navegador aberto ao lado: a cada `Ctrl + S` a página atualiza.

### O que tem em cada arquivo

| Arquivo | Para que serve | Precisa mexer? |
|---|---|---|
| `index.html` | Todo o conteúdo da página | **Sim** — textos, links e imagens |
| `css/estilo.css` | Cores, tamanhos e layout | Opcional — só as cores no começo do arquivo |
| `js/script.js` | Menu do celular e ano do rodapé | Não |
| `img/` | Sua foto e os prints dos projetos | **Sim** — troque as imagens |
| `docs/` | Seu currículo em PDF (opcional) | Se quiser |

---

## 2. Preenchendo seção por seção

### Título da aba (`<title>`) e descrição
Fica no topo do `index.html`. É o que aparece na aba do navegador e no
resultado do Google. Exemplo:

```html
<title>Ana Souza | Desenvolvedora Front-end</title>
<meta name="description" content="Portfólio de Ana Souza, estudante de ADS. Projetos em HTML, CSS e JavaScript.">
```

### Foto
- Salve sua foto como `img/foto-perfil.jpg` (substitua a de exemplo).
- Formato quadrado, de preferência entre 400 e 800 pixels de largura.
- Rosto bem iluminado, fundo simples, roupa que você usaria numa entrevista.
- Evite selfie com filtro, foto de festa, foto cortada de grupo e óculos escuros.
- No `alt` da imagem, escreva seu nome: `alt="Foto de Ana Souza"`.

### Apresentação
- **Nome**: o nome pelo qual você quer ser encontrado(a) — o mesmo do LinkedIn.
- **Cargo**: o que você faz ou quer fazer. Exemplos:
  - Desenvolvedora Front-end em formação
  - Estudante de ADS | HTML, CSS e JavaScript
  - Desenvolvedor Web Júnior
- **Resumo**: uma ou duas frases. Exemplo:
  > Estudante de Análise e Desenvolvimento de Sistemas no CEUNSP. Gosto de
  > transformar ideias em páginas simples, rápidas e acessíveis.

### Sobre mim
Dois ou três parágrafos curtos. Algumas perguntas que ajudam a escrever:

- Como você chegou à tecnologia? (mudança de área, curiosidade, um projeto)
- O que você mais gosta de fazer: interface, lógica, dados, design?
- O que você está estudando agora?
- Que tipo de oportunidade você procura? (estágio, primeiro emprego, freelancer)
- Alguma experiência de outra área que ajuda? (atendimento, vendas, liderança,
  trabalho voluntário — tudo isso conta)

Evite: frases genéricas como "sou proativo e dinâmico", e informações pessoais
demais (endereço, documentos, estado civil).

### Formação
Cada curso é um bloco `<li class="item-formacao">`. Para adicionar mais um,
copie um bloco inteiro e cole logo abaixo. Coloque do mais recente para o mais
antigo:

1. Faculdade (com previsão de conclusão)
2. Cursos técnicos
3. Cursos livres com certificado (Alura, Udemy, Fundação Bradesco, Coursera,
   cursos gratuitos do governo, bootcamps)
4. Ensino médio (opcional, se tiver poucos itens acima)

### Habilidades
Coloque **só o que você consegue usar de verdade** — numa entrevista vão
perguntar. Misture habilidades técnicas e comportamentais. Sugestões:

- Técnicas: HTML5, CSS3, JavaScript, Bootstrap, Git, GitHub, Figma, SQL,
  Java, Python, acessibilidade web, design responsivo
- Comportamentais: trabalho em equipe, comunicação, organização,
  aprendizado rápido
- Idiomas: inglês (básico/intermediário/técnico), espanhol

### Projetos (a parte mais importante)
O recrutador quer **ver** o que você faz. Cada projeto é um
`<article class="card-projeto">`. Para cada um:

- **Imagem**: tire um print da tela do projeto (`Win + Shift + S`) e salve em
  `img/` com nome simples, sem espaço e sem acento: `projeto-tarefas.jpg`.
  Atualize o `src` e escreva um `alt` que descreva a tela.
- **Título e descrição**: o que o projeto faz em uma ou duas frases.
- **Tecnologias**: as que você usou.
- **Links**: o repositório no GitHub ("Código") e, se o projeto estiver
  publicado, o endereço ("Ver online"). Se não tiver um dos dois, apague o
  link — nunca deixe link quebrado.

**O que colocar** (de 3 a 6 projetos):
- Exercícios da disciplina que você melhorou: lista de tarefas, formulário,
  página com Bootstrap, menu responsivo
- O projeto do semestre do seu grupo (cite que foi em grupo e qual foi a sua parte)
- Um projeto pessoal, mesmo pequeno: página de receitas, calculadora,
  site para um parente ou para um comércio do bairro
- Trabalhos de outras disciplinas que tenham código

Prefira poucos projetos bem acabados a muitos pela metade.

### Contato
- E-mail profissional (nome.sobrenome@...), não apelidos.
- LinkedIn com o mesmo nome e a mesma foto do portfólio.
- GitHub com os repositórios dos projetos.
- Não coloque telefone pessoal nem endereço: o site é público.

### Rodapé
Troque "Seu Nome". O ano é preenchido sozinho pelo `script.js`.

### Currículo em PDF (opcional)
Salve como `docs/curriculo.pdf` e, no `index.html`, apague os sinais
`<!--` e `-->` da linha do botão "Baixar currículo".

---

## 3. Mudando as cores (opcional)

No começo do `css/estilo.css` estão as variáveis de cor. Trocando só elas, o
site inteiro muda. Algumas combinações prontas que mantêm bom contraste:

| Estilo | `--cor-principal` | `--cor-destaque` | `--cor-clara` |
|---|---|---|---|
| Original (azul e terracota) | `#1E3A5F` | `#A0522D` | `#E8C9A0` |
| Verde-floresta e dourado | `#1F4D3A` | `#8A6100` | `#E6D3A3` |
| Vinho e cobre | `#5A1E2E` | `#9C4A1A` | `#EBC9B4` |
| Grafite e azul | `#2B2D42` | `#2F5DA8` | `#C9D6EA` |

Depois de trocar, confira o contraste no DevTools (clique no quadradinho de
cor do painel Styles). Texto normal precisa de pelo menos **4,5:1**.

---

## 4. Conferindo antes de publicar

- [ ] Procurei por `ALTERE`, `Seu Nome`, `seu-usuario` e `exemplo` e não
      sobrou nenhum
- [ ] Todas as imagens de exemplo foram trocadas
- [ ] Todo link funciona (clique em todos)
- [ ] Testei no modo celular do DevTools (`Ctrl + Shift + M`): o menu ☰
      abre e fecha
- [ ] Naveguei pela página só com a tecla `Tab`: dá para ver onde está o foco
- [ ] Rodei o Lighthouse (DevTools → Lighthouse) e a nota de
      Acessibilidade está em 90 ou mais
- [ ] Console do DevTools sem erro vermelho
- [ ] Li tudo em voz alta procurando erro de português

---

## 5. Publicando no GitHub Pages

### Caminho mais simples: endereço `seu-usuario.github.io`

1. No GitHub, crie um repositório **público** com o nome exato
   `seu-usuario.github.io` (troque `seu-usuario` pelo seu usuário do GitHub).
2. No terminal, dentro da pasta do portfólio:

   ```bash
   git init
   git add .
   git commit -m "Cria portfólio pessoal"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-usuario.github.io.git
   git push -u origin main
   ```

3. No repositório: **Settings → Pages → Branch: main → / (root) → Save**.
4. Em alguns minutos o site estará em `https://seu-usuario.github.io`.

Prefere não usar o terminal? No repositório vazio, clique em *uploading an
existing file* e arraste os arquivos e pastas (sem a pasta `.git`).

### Atualizando depois

Cada mudança: `git add .`, `git commit -m "Descreve a mudança"` e `git push`.
O site atualiza sozinho em alguns minutos.

### Problemas comuns

| Sintoma | Causa provável |
|---|---|
| Página 404 no GitHub Pages | O arquivo não se chama `index.html` ou está dentro de uma subpasta |
| Imagem aparece no seu PC e não no site | Diferença de maiúscula: `Foto.JPG` no arquivo e `foto.jpg` no código |
| Site sem estilo | Caminho do CSS errado ou começando com `/` |
| Mudança não aparece | Espere alguns minutos e recarregue com `Ctrl + F5` |

---

## 6. Depois de publicar

- Coloque o link do portfólio no LinkedIn (seção Contato e no campo Site).
- Coloque o link no seu perfil do GitHub (campo *Website*).
- Coloque o link no currículo, logo abaixo do nome.
- Fixe (*Pin*) no seu perfil do GitHub os repositórios dos projetos que
  aparecem no portfólio.
- Atualize sempre que terminar um projeto novo: portfólio parado há dois
  anos passa a impressão de que você parou de estudar.
