export const preguntasSemana4 = [
  {
    pregunta: "¿Qué comando muestra ayuda sobre Perl?",
    opciones: ["perl -v", "perl --version", "perl --help", "help perl"],
    respuestaCorrecta: "perl --help"
  },
  {
    pregunta: "¿Cuál es la sintaxis para ejecutar un script simple de Perl desde la terminal?",
    opciones: [
      "perl -e 'print Hola'",
      "perl 'print Hola'",
      "perl -c 'Hola'",
      "perl -e 'print \"Hola\\n\";'"
    ],
    respuestaCorrecta: "perl -e 'print \"Hola\\n\";'"
  },
  {
    pregunta: "¿Qué extensión puede tener un script en Perl?",
    opciones: [".py", ".cgi", ".sh", ".rb"],
    respuestaCorrecta: ".cgi"
  },
  {
    pregunta: "¿Qué comando permite editar un script en Perl?",
    opciones: ["edit archivo.pl", "nano archivo.pl", "code archivo.pl", "open archivo.pl"],
    respuestaCorrecta: "nano archivo.pl"
  },
  {
    pregunta: "¿Es obligatorio cambiar permisos a un script Perl para ejecutarlo?",
    opciones: ["Sí", "No", "Depende del sistema", "Solo en Windows"],
    respuestaCorrecta: "No"
  },
  {
    pregunta: "¿Qué hace el comando `ll archivo.pl`?",
    opciones: [
      "Ejecuta el script",
      "Muestra el contenido del archivo",
      "Lista detalles del archivo",
      "Cambia los permisos"
    ],
    respuestaCorrecta: "Lista detalles del archivo"
  },
  {
    pregunta: "¿Cómo se ejecuta un archivo Perl desde la terminal?",
    opciones: [
      "bash archivo.pl",
      "perl archivo.pl",
      "run archivo.pl",
      "sh archivo.pl"
    ],
    respuestaCorrecta: "perl archivo.pl"
  },
  {
    pregunta: "¿Cuál es la sintaxis correcta para definir una variable en Perl?",
    opciones: ["int x = 5;", "$x = 5;", "var x = 5;", "@x = 5;"],
    respuestaCorrecta: "$x = 5;"
  },
  {
    pregunta: "¿Qué tipo de variable es `@array` en Perl?",
    opciones: ["Hash", "String", "Array", "Booleano"],
    respuestaCorrecta: "Array"
  },
  {
    pregunta: "¿Qué comando imprime la longitud de una cadena en Perl?",
    opciones: ["count", "len", "length", "strlen"],
    respuestaCorrecta: "length"
  },
  {
    pregunta: "¿Qué hace `lc \"HELLO\"` en Perl?",
    opciones: [
      "Devuelve HELLO en mayúsculas",
      "Convierte la cadena a minúsculas",
      "Calcula la longitud",
      "Imprime HELLO 2 veces"
    ],
    respuestaCorrecta: "Convierte la cadena a minúsculas"
  },
  {
    pregunta: "¿Qué imprime `print \":-)\" x 10;`?",
    opciones: [
      "10 caritas tristes",
      "Nada, da error",
      "Caritas felices repetidas 10 veces",
      "Solo una carita feliz"
    ],
    respuestaCorrecta: "Caritas felices repetidas 10 veces"
  },
  {
    pregunta: "¿Cuál es la forma correcta de definir constantes en Perl?",
    opciones: [
      "constant PI = 3.14;",
      "const PI = 3.14;",
      "use constant PI => 3.14;",
      "define PI 3.14"
    ],
    respuestaCorrecta: "use constant PI => 3.14;"
  },
  {
    pregunta: "¿Qué operador se usa para concatenar en Perl?",
    opciones: ["+", "&", ".", ","],
    respuestaCorrecta: "."
  },
  {
    pregunta: "¿Cómo se imprime el segundo elemento de un array `@animales = (\"gato\", \"perro\")`?",
    opciones: [
      "$animales[2]",
      "$animales[0]",
      "$animales[1]",
      "@animales[1]"
    ],
    respuestaCorrecta: "$animales[1]"
  },
  {
    pregunta: "¿Qué operador se usa para dividir dos números en Perl?",
    opciones: ["div", "/", "*", "-"],
    respuestaCorrecta: "/"
  },
  {
    pregunta: "¿Qué hace `uc \"hello\"` en Perl?",
    opciones: [
      "Convierte el texto a minúsculas",
      "Convierte el texto a mayúsculas",
      "Muestra el tipo de variable",
      "No hace nada"
    ],
    respuestaCorrecta: "Convierte el texto a mayúsculas"
  },
  {
    pregunta: "¿Qué comando imprime un texto y el resultado de una suma?",
    opciones: [
      "print 'Resultado: ' + $a + $b;",
      "echo Resultado: $a + $b;",
      "print \"Resultado: \", $a + $b;",
      "output Resultado $a $b"
    ],
    respuestaCorrecta: "print \"Resultado: \", $a + $b;"
  },
  {
    pregunta: "¿Qué hace `perl archivo.cgi`?",
    opciones: [
      "Edita el archivo",
      "Ejecuta el archivo .cgi con Perl",
      "Cierra el archivo",
      "Compila un script de Bash"
    ],
    respuestaCorrecta: "Ejecuta el archivo .cgi con Perl"
  },
  {
    pregunta: "¿Qué tipo de lenguaje es Perl?",
    opciones: ["Compilado", "Interpretado", "Ensamblador", "Binario"],
    respuestaCorrecta: "Interpretado"
  }
]
