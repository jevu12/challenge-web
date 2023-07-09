Feature: realizar la busqueda de peliculas de suspenso
  como usuario
  quiero poder buscar peliculas de suspenso
  para seleccionar los títulos de 3 primeros titulos y poder ver sus detalles

  Background:
    Given que ingreso a la pagina de netflix
    When hago clic en el botón Iniciar sesión en la página principal
    And lleno los campos del formulario con mis credenciales
    Then hago click en el boton iniciar sesion

    Scenario: Buscar peliculas de suspenso
      Given veo la sección de perfiles
      And selecciono mi perfil de usuario
      When hago clic en el boton buscar
      And escribo en el campo de busqueda la palabra suspenso
      Then veo los resultados de la busqueda y selecciono los 3 primeros titulos