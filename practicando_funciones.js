//Función que suma 2 números
const suma = (num1, num2) => {
    return num1+num2
} 
const result = suma (5,3);
console.log(result);

//Función nombre y apellido
const nombreYapellido = (nombre, apellido) => {
    return nombre + apellido
}
const result2 = nombreYapellido ("Andrea",    "Giménez");
console.log(result2);

//Función lista
let ListadeSuper = ["pan","leche","azúcar","harina"];
//Usando find
let result3 = ListadeSuper.find(function(full_lista){
    return full_lista
})
console.log(result3);