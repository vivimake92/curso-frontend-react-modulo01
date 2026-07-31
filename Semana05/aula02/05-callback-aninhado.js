function loadOrders(callback) {
    setTimeout(() => {
        console.log("2 - Pedidos carregados")
        callback()
    }, 2000)
}

function loginUser(user, callback) {
    setTimeout(() => {
        console.log("1 - Usuário logado: ", user)
        callback()
    }, 2000)
}

loginUser("Henrique"), () => {
    loadOrders(() => {
        console.log("Tudo finalizado!")
    })
}