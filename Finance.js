
let balance = parseFloat(prompt("Informe o saldo inicial: "))

let option = ""

do {

    option = prompt(

        "Saldo Disponível : R$" + balance +
        "\n 1)Adicionar dinheiro \n" +
        "\n 2) Remover dinheiro \n" + 
        "\n 3) Sair \n"

        )

        switch(option) {
            case "1":
                balance += parseFloat(prompt("Informe o valor que deseja adicionar:"))
                break
            case "2":
                balance  -= parseFloat(prompt("Informe o valor que deseja remover."))
                break
            case 3:
                alert("Abandonando operação")
                break
            default:
                alert("Opção Inválida!")
        }

} while (option !== "3")
