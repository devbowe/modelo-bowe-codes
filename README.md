# Modelo Bowe

## Como utilizar?

-   Coloque o código do arquivo CSS **do modelo** antes de qualquer folha de estilo própia. O modelo contém arquivos de Reset/Padronização cross-browser, espaçamentos, fontes, cores e classes utilitárias, além das seções pré moldadas e alguns componentes.

---

### Definindo cores e fontes

-   Para definir cores e fontes (famílias) basta escrever propriedades CSS, **após** a folha de estilo do modelo, na tag _:root_ ou na tag _html_. Isso pode ser feito em um arquivo .css ou diretamente no aquivo html. Um exemplo com todas as customizações disponíveis:

```
    --clr-primary: #f56781;
    --clr-secondary: #00c3f2;
    --clr-tertiary: #00e284;

    --clr-neutral-100: #ffffff;
    --clr-neutral-200: #f5f5f5;
    --clr-neutral-300: #dcdcdc;
    --clr-neutral-400: #d3d3d3;
    --clr-neutral-500: #c0c0c0;
    --clr-neutral-600: #a0a0a0;
    --clr-neutral-700: #787878;
    --clr-neutral-800: #101010;
    --clr-neutral-900: #000000;

    --ff-primary: "Poppins", sans-serif;
    --ff-title: "Bebas Neue", cursive;
    --ff-tertiary: sans-serif;

    --clr-btn: white;
    --bg-btn: red;

    --clr-body: #ffffff;
    --clr-text: #000000;

    --clr-placeholder: #c7c7c7;
```

-   As propriedades customizadas de cor podem ser atribuidas à qualquer elemento no HTML com a classe igual à seu nome. Ex: _.clr-primary_ define a cor do elemento para a cor definida como primária.

-   Para **background-color**, a lógica é a mesma, porém aqui usamos o prefixo _bg-_. Ex: _bg-clr-primary_

-   As definições de fonte são atribuidas ao documento com a propriedade _--ff-primary_. As tags H\* vão ter a fonte definida em _--ff-title_, se existir. Caso não exista, recebem a fonte primária.

-   _--clr-btn_ é para atribuição somente da cor do texto do botão. O motivo é: a cor do fundo é atribuída com base no valor _--bg-btn_, caso existe, se não, é definida pela _--clr-primary_.

### Reescrevendo componentes

-   Todo estilo pode ser reescrito, essa é a ideia do modelo. Para isso, basta acessar a classe e reestilizar de acordo com o layout proposto. Tamanhos de fonte e espaçamento já estão padronizados, ou seja, basta reescrever cores, tipo de fonte, etc.

-   Exemplo: colocar o botão com bordas arredondadas.

```
.btn {
    border-radius: 100vmax;
}
```

-   Exemplo: trocar a cor de fundo de todos os botões

```
Escreve-se a propriedade CSS:

--bg-btn: "";
```

-   Trocar estilo de todos os títulos de seção:

```
.h2 {
    font-weight: 700;
    color: red;
    text-transform: uppercase;
}
```

-   Adicionar cores de fundo ou imagens na seção:

```
.section-hero-01 {
    background-color: #232323;
    color: #fdfdfd;
}
```

---

## Tamanhos e valores fixos

### Font Size

-   prefixo **fs-**
-   exemplos: **fs-1** ou **fs-8**

```
font-sizes:
    1: 0.75rem
    2: 0.85rem
    3: 1rem
    4: 1.125rem
    5: 1.25rem
    6: 1.5rem
    7: 1.75rem
    8: 2rem
    9: 2.25rem
    10: 2.5rem
```

### Font Weights

-   prefixo **fw-**
-   exemplo: **fw-400** ou **fw-700**

```
font-weights:
    300
    400
    500
    600
    700
```

### Espaçamentos e direções

-   Os elementos dos blocos codados possuem o espaçamento vindo de classe, facilitando qualquer mudança de valor.

-   prefixo **mt-** ou **pb-** etc
-   exemplos: **mt-2** ou **pb-7**

```
valores:
    1: 0.25rem
    2: 0.5rem
    3: 1rem
    4: 1.25rem
    5: 1.5rem
    6: 1.75rem
    7: 2rem
    8: 2.25rem
    9: 2.5rem
    10: 3rem


direções:
    mt: margin-top
    mb: margin-bottom
    m-block: margin-block
    pt: padding-top
    pb: padding-bottom
    p-block: padding-block


```

### Propriedades CSS customizadas para elementos

```
    --width: "";
    --columns-size: "";
    --grid-gap: "";
```

-   Tags `p` e títulos (`h`\*): qualquer tag `<p>` ou qualquer tag de heading (`<h1>`, `<h2>`, `<h3>`...) podem ter sua largua definida aplicando o atributo `style="--width: x"` dentro da tag. Caso necessite centralizar o texto, utilizar a classe `center` em conjunto. Uma boa prática para tornar tudo responsivo: utilizar a medida `ch` (quantidade de caracteres) para definir a largura. Exemplo:

```
<p style="--width: 50ch;">Aqui vai um texto legal.</p>

<p class="center" style="--width: 50ch;">Aqui vai um texto legal.</p>
```

-   **Listas**: colocando `style="--columns-size: x"` dentro da tag _ul_, podemos modificar o tamanho mínimo dos elementos que compõem a lista. Ex. `--columns-size: 10rem` significa que nenhum item da lista terá menos que **10rem** de largua. Isso garante a responsividade em todos os dispositivos. O tamanho padrão de items de lista é **20rem**.

-   Dentro de elementos com a classe `container`, onde temos divisão de conteúdo (grid, flex) podemos utilizar `style="--grid-gap: x"` para definir um valor customizado para o gap. Vale ressaltar que o valor fixado aqui não se torna responsivo.

### Classes utilitárias

```
.container
.spacing
.flow
.center
.pos-rel
.even-columns
.uppercase
.lowercase

.al-center
.al-end
.al-start
```

-   **container**: `1280px` de largura máxima e `5%` de espaçamento lateral.

-   **spacing**: aplica padding no eixo Y. O espaço aplicado é definido pela propriedade `--spacing`

-   **flow**: busca por todas as tags `<p>` e aplica o espaçamento padrão entre os parágrafos.

-   **center**: aplica `text-align: center` e `margin-inline: auto` no elemento (ou todos abaixo dele).

-   **pos-rel**: `position: relative`, facilita para posicionar elementos flutuantes, etc.

-   **even-columns**:

-   **uppercase**: transforma o texto em caixa alta

-   **lowercase**: transforma o texto em caixa baixa

-   **al**: alinha elementos dentro do container. Deve ser usada somente elementos com classe container.

### Trabalhando com formulários

-   aqui se encontram todos os modelos de formulários disponíveis: https://modelo-bowe-codes.vercel.app/

### Form mobile

-   IMPORTANTE: para esconder os botões, basta criar uma regra css com breakpoint em 1200px, exemplo:

```
@media (min-width: 1200px) {
   .btn {
        display: none;
    }
}
```

-   Para utilizar um formulário flutuante no mobile, o setup se dá com:

```
<div class="form-wrapper form-mobile">
    <button data-action="close-form" aria-label="Fechar formulário">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
        >
            <path
                fill="currentColor"
                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"
            />
        </svg>
    </button>

    <div class="center">
        <h2 class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae, in?
        </h2>
        <p class="mb-5">Lorem ipsum dolor sit amet.</p>
    </div>

    <form></form>
</div>

<button class="btn btn-form-mobile" data-action="open-form">
    ABRIR FORM
</button>

<!-- OPEN/CLOSE form script -->
<script>
    const buttonCloseForm = document.querySelector("[data-action='close-form']");
    const buttonOpenForm = document.querySelector("[data-action='open-form']");
    const formWrapper = document.querySelector(".form-mobile");
    const form = formWrapper.querySelector("form");

    buttonOpenForm.addEventListener("click", (e) => {
        formWrapper.classList.add("open");
    });

    buttonCloseForm.addEventListener("click", (e) => {
        formWrapper.classList.remove("open");
    });
</script>
```

-   Na tag **form**, troque pelo formulário desejado. Além disso, o botão de abertura do form e o script de funcionamento devem ser adicionados.

### Estilizando formulário

-   a propriedade `clr-placeholder` define a cor do placeholder dos campos
-   elementos de estilização tomam como base a cor definida na propriedade _--clr-primary_

## Trabalhando com listas

-   para mudar o tamanho dos elementos, basta aplicar a tag `style="--columns-size: x"`, trocando o `x` pelo novo tamanho. Por padrão, os elementos tem _20rem_. Quanto maior o valor, maior a largura mínima, ou seja, menos colunas em dispositivos maiores.
