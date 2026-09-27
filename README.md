# RepoScope

Explorador de repositórios do GitHub: busque um usuário e veja seu perfil e seus repositórios públicos, com filtro por linguagem e ordenação por estrelas, mais recentes ou nome.

**Stack:** Vue 3 + Vite + Bootstrap (bootstrap-vue-next) + Axios. JavaScript puro, sem TypeScript.

## Rodar

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # gera /dist
npm run preview    # serve o /dist gerado
```

## Estrutura

```
src/
  services/github.js         chamadas à API do GitHub (via axios) + tratamento de erros
  components/
    Cabecalho.vue              header fixo com logo e link para o GitHub
    BrilhoMouse.vue            halo que acompanha o cursor
    Rodape.vue
    FormularioBusca.vue
    CartaoUsuario.vue
    CartaoRepositorio.vue
    ListaRepositorios.vue      ordenação e filtro por linguagem
    EsqueletoCarregamento.vue  skeleton de carregamento
  App.vue                     estado da busca e orquestração
```

## API do GitHub

Consome a [API REST pública do GitHub](https://docs.github.com/rest), sem necessidade de chave ou autenticação:

| Endpoint | Uso |
|---|---|
| `GET /users/{username}` | perfil do usuário (nome, avatar, bio, localização, empresa, etc.) |
| `GET /users/{username}/repos?sort=updated&per_page=100` | repositórios públicos, até 100, ordenados por atualização |

- **Limite de requisições:** sem autenticação, o GitHub permite **60 requisições/hora por IP**. Ao atingir o limite, a API retorna `403` e o app mostra uma mensagem pedindo para tentar novamente mais tarde.
- **Usuário não encontrado:** retorna `404`, tratado com uma mensagem específica.
- Toda a lógica de chamada e tratamento de erro fica isolada em `src/services/github.js`.

## Notas

- Cor de destaque e tema visual configuráveis via variáveis `--cor-destaque*` no topo de `style.css`.
- Cada componente registra localmente os componentes do bootstrap-vue-next que usa — `createBootstrap()` não os registra globalmente na v1.x.
