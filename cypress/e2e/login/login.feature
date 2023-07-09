Feature: Iniciar sesion en netflix
  Como usuario
  Quiero iniciar sesion en netflix
  Para poder ver peliculas y series
  Scenario: ingresar a la home de netflix
    Given que ingreso a la pagina de netflix
    When hago clic en el botón Iniciar sesión en la página principal
    And lleno los campos del formulario con mis credenciales
    Then hago click en el boton iniciar sesion