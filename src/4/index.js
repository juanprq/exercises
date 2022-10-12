class Usuario {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
};

const usuarios = [
  new Usuario('Jaycee', 'Morar', 37),
  new Usuario('Jammie', 'Casper', 13),
  new Usuario('Clark', 'Reinger', 85),
  new Usuario('Kurtis', 'Feest', 33),
  new Usuario('Brian', 'Denesik', 52),
  new Usuario('Rachel', 'Botsford', 27),
  new Usuario('Fritz', 'Mante', 52),
  new Usuario('Eda', 'Watsica', 16),
  new Usuario('Margaretta', 'Buckridge', 31),
  new Usuario('Joel', 'Wehner', 69),
  new Usuario('Aiden', 'Murphy', 26),
  new Usuario('Felton', 'Thiel', 73),
  new Usuario('Emelie', 'McDermott', 92),
  new Usuario('Eunice', 'Crooks', 19),
  new Usuario('Roselyn', 'Johnston', 43),
  new Usuario('Kaleigh', 'Reynolds', 15),
  new Usuario('Russ', 'Rolfson', 52),
  new Usuario('Otho', 'Bauch', 83),
  new Usuario('Annalise', 'Stamm', 40),
  new Usuario('Johnathan', 'Lakin', 39),
  new Usuario('Ruthie', 'Bauch', 94),
  new Usuario('Rey', 'Ryan', 40),
  new Usuario('Magdalen', 'Keeling', 70),
  new Usuario('Jerrell', 'Schiller', 91),
  new Usuario('Deshaun', 'Bechtelar', 33),
  new Usuario('Allene', 'Powlowski', 31),
  new Usuario('Leanna', 'Mertz', 87),
  new Usuario('Esteban', 'Rolfson', 33),
  new Usuario('Roberto', 'Macejkovic', 87),
  new Usuario('Manuel', 'Lueilwitz', 40),
  new Usuario('Sincere', 'Satterfield', 63),
  new Usuario('Aimee', 'Runte', 45),
  new Usuario('Carlie', 'Romaguera', 99),
  new Usuario('Dewayne', 'Douglas', 64),
  new Usuario('Gia', 'Daniel', 15),
  new Usuario('Jessie', 'Fadel', 77),
  new Usuario('Laurence', 'McDermott', 54),
  new Usuario('Alvena', 'Boyer', 89),
  new Usuario('Danial', 'Graham', 70),
  new Usuario('Grady', 'Wolff', 40),
  new Usuario('Howell', 'Pacocha', 75),
  new Usuario('Benton', 'Mosciski', 68),
  new Usuario('Percival', 'Mraz', 88),
  new Usuario('Enola', 'Reynolds', 91),
  new Usuario('Edyth', 'Greenfelder', 70),
  new Usuario('Kaya', 'King', 35),
  new Usuario('Edward', 'Shanahan', 21),
  new Usuario('Neha', 'Kuhlman', 47),
  new Usuario('Hollie', 'Emmerich', 81),
  new Usuario('Zora', 'Johns', 10),
];

// TODO:
// 1. imprimir la suma de todas las edades de los usuarios
// 2. imprimir el promedio de las dedades de los usuarios
// 3. imprimir un arreglo de strings, con nombre y apellido de cada usuario
// 4. imprimir el promedio de la cantidad de caracteres que tienen todos los nombres
// 5. encuentre dos usuarios que tengan el nombre repetido
// 6. imprimir un arreglo de strings cuyo valor sea el email de cada usuario
//    el email de un usuario esta compuesto por la primera letra de su nombre, seguido de su apellido, seguido por '@empresa.com' y todo debe de estar en letras minuculas
// 7. contar cuantos usuarios tienen el apellido 'Reynolds'
