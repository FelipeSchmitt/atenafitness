function basal_metabolism(){
    result = document.getElementById("result")
    gender = document.getElementById("gender").value
    age = document.getElementById("age").value
    weight = document.getElementById("weight").value
    height = document.getElementById("height").value
    cost_masc = 10 * weight + 6.25 * height - 5 * age + 5
    cost_fem = 10 * weight + 6.25 * height - 5 * age - 161
    if(gender == "F"){
        result.innerHTML= `Seu gasto metabólico Basal é de ` + Math.trunc(cost_fem) + `Kcal`
    }else{
        result.innerHTML= `Seu gasto metabólico Basal é de ` + Math.trunc(cost_masc) + `Kcal`
    }
}