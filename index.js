<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>carros</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>

<form action="verificarLogin.php" method="post">
<div class="mx-auto p-2" style="width: 200px;">
<p class="fs-1">Bem vindo</p>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Usuario</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="usuario">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Senha</label>
    <input type="password" class="form-control" id="senha" name="senha">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Lembrar meu login</label>
  </div>
  <button type="submit" name="Entrar" id="buttons" class="btn btn-primary">Entrar</button>
  <a href="cadastro.php" id="buttons" class="btn btn-primary">Cadastrar</a>
    </div>
</form>

<footer class="bg-dark text-light text-center py-3 mt-5">
  <p>&copy;Todos os direitos reservados.</p>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
