#NodeJS <a href="https://www.rocketseat.com.br/" target="_blank">#ROCKETSEAT</a> 

#App 
GymPass Style App

## RFs (Requesitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizado pelo usuário logado;
- [ ] Deve ser possível obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastar uma academia;

##  RN (Regras de negócio)

- [x] O usuário nao deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário nao pode fazer check-in se nao estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requeritos não-funcionais)

- [x] A senha do usário precisa estar criptografada;
- [x] Os dados da aplicação precisao estar persistidos em um banco PostgreSQL;
- [ ] Todas lista de dados precisao estar paginadas com 20 itens por páginas;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
