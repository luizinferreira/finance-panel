const Modal = {
    open(){
        document.querySelector('.modal').classList.add('active')
    },

    close(){
        document.querySelector('.modal').classList.remove('active')
    }
}

const transactions = [
    {
        id= 1,
        description= 'Luz',
        amount= '-50000',
        date= '23/01/2021' 
    },
    {
        id=2,
        description= 'Luz',
        amount= -50000,
        date= '23/01/2021' 
    },
    {
        id=3,
        description= 'Luz',
        amount= -50000,
        date= '23/01/2021' 
}]


const transaction = {
    incomes(){
        //Somar as Entradas
    },
    expenses(){
        //Somar as Saídas
    },
    total(){
        //Subtrair o valor da entrada pelo valor da saída
    }
}

const DOM = {
    addTransaction(transaction,index){
        console.log('teste')
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()
    },
    innerHTMLTransaction(){
        const html = `<tr>
        <td class="description">Luz</td>
        <td class="expense">-R$500,00</td>
        <td class="date">23/01/2021</td>
        <td>
            <img src="./assets/minus.svg" alt="image de remover">
        </td>
    </tr>`
    return html
    }
}