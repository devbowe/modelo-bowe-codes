# Modelo Bowe

## Como utilizar?

-   Coloque o código do arquivo CSS **do modelo** antes de qualquer folha de estilo própia. O modelo contém arquivos de Reset/Padronização cross-browser, espaçamentos, fontes, cores e classes utilitárias, além das seções pré moldadas e alguns componentes.

---

### Definindo cores e fontes

-   Para definir cores e fontes (famílias) basta escrever propriedades CSS, **após** a folha de estilo do modelo, na tag _:root_ ou na tag _html_. Isso pode ser feito em um arquivo .css ou diretamente no aquivo html. Um exemplo com todas as customizações disponíveis:

```
    --clr-accent-primary: #f56781;
    --clr-accent-secondary: #00c3f2;
    --clr-accent-tertiary: #00e284;
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
    --clr-body: #ffffff;
    --clr-text: #000000;
```

-   As propriedades customizadas podem ser atribuidas à qualquer elemento no HTML com a classe igual à seu nome. Ex: _.clr-accent-primary_ define a cor do elemento para a cor definida.

-   As definições de fonte são atribuidas ao documento e as tags H\*. Ou seja, a família de fonte definida em _--ff-title_, é atribuida à todos os títulos da página.

-   _--clr-btn_ é para atribuição somente da cor do texto do botão. O motivo é: a cor do fundo é atribuída com base no valor _--clr-accent-primary_.

### Reescrevendo componentes

-   Todo estilo pode ser reescrito. Essa é a ideia do modelo. Para isso, basta acessar a classe e reestilizar de acordo com o layout proposto. Tamanhos de fonte e espaçamento já estão padronizados, ou seja, basta reescrever cores, tipo de fonte, etc.

-   Exemplos: colocar o botão com bordas arredondadas.

```
.btn {
    border-radius: 100vmax;
}
```

-   Trocar estilo de todos os títulos de seção:

```
.section-title {
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
-   exemplo **fs-1** ou **fs-8**

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
-   exemplo **fw-400** ou **fw-700**

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
-   exemplo **mt-2** ou **pb-7**

```
spaces:
    1: .25rem
    2: .5rem
    3: 1rem
    4: 1.125rem
    5: 1.25rem
    6: 1.5rem
    7: 1.75rem
    8: 2rem
    9: 2.25rem
    10: 2.5rem


directions:
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

-   Tags `p` e títulos (`h`\*): qualquer tag `<p>` ou qualquer tag de heading (`<h1>`, `<h2>`, `<h3>`...) podem ter seu tamanho definido aplicando o atributo `style="--width: x"` dentro da tag. Caso necessite centralizar o texto, utilizar a classe `center` em conjunto. Uma boa prática para tornar tudo responsivo: utilizar a medida `ch` (quantidade de caracteres) para definir a largura.

-   Listas: colocando `style="--columns-size: x"` dentro da tag _ul_, podemos modificar o tamanho mínimo dos elementos que compõem a lista. Ex. `--columns-size: 10rem` significa que nenhum item da lista terá menos que **10rem** de largua. Isso garante a responsividade em todos os dispositivos. O tamanho padrão de items de lista é **20rem**.

-   Dentro de elementos com a classe `container`, onde temos divisão de conteúdo (grid, flex) podemos utilizar `style="--grid-gap: x"` para definir um valor customizado para o gap. Vale ressaltar que o valor fixado aqui não se torna responsivo.
