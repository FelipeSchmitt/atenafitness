function bf_calculator(){
    result = document.getElementById("result")
    gender = document.getElementById("gender").value
    height = document.getElementById("height").value
    circumference = document.getElementById("circumference").value
    cost_masc = 63 - (20 * height / circumference)
    cost_fem = 76 - (20 * height / circumference)
    if(gender == "F"){
        result.innerHTML= `Seu percentual de gordura é de ` + cost_fem.toFixed(1) + `%`
    }else{
        result.innerHTML= `Seu percentual de gordura é de ` + cost_masc.toFixed(1) + `%`
    }
}