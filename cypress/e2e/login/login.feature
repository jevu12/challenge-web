Feature: Iniciar sesion en netflix
  Como usuario
  Quiero iniciar sesion en netflix
  Para poder ver peliculas y series
  Scenario: ingresar a la home de netflix
    Given que ingreso a la pagina de netflix
    When hace click en el boton de iniciar sesion del home
    And se muestra el formulario de inicio de sesion
    And hace click en el boton iniciar sesion
    Then el usuario se loguea en netflix