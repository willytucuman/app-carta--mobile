export const formatearDinero = cantidad =>{
    return cantidad.toLocaleString("en-AR",{
        style:"currency",
        currency:"ARS"
    })
}