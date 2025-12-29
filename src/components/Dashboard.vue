<template>
    <div id="burger-table">
        <Message :msg="msg" v-show="msg" />
        <div>
            <div id="burger-table-heading">
                <div class="order-id">#:</div>
                <div>Cliente:</div>
                <div>Pão:</div>
                <div>Carne:</div>
                <div>Opcionais:</div>
                <div>Ações:</div>
            </div>
        </div>
        <div id="burger-table-rows">
            <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
                <div class="order-number">{{ burger.id }}</div>
                <div>{{ burger.nome }}</div>
                <div>{{ burger.pao }}</div>
                <div>{{ burger.carne }}</div>
                <div>
                    <ul>
                        <li v-for="(opcional, index) in burger.opcionais" :key="index">{{ opcional }}</li>
                    </ul>
                </div>
                <div>
                    <select name="status" class="status" @change="updateBurger(burger.id, $event)">
                    <option value="">Selecione</option>
                    <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burger.status == s.tipo">{{ s.tipo }}</option>
                    </select>
                    <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
/* Imports */
import { onMounted, ref } from 'vue'
import Message from './Message.vue'

/* Types & Interfaces */
interface Burger {
    id: string;
    nome: string;
    pao: string;
    carne: string;
    opcionais: string[];
    status: string;
}

interface Status {
    id: number;
    tipo: string;
}

/* defines */
defineOptions({ name: 'Dashboard'})

/* constants & variables */
const burgers = ref<Burger[] | null>(null)
const burger_id = ref<string[] | null>(null)
const status = ref<Status[]>([])
const msg = ref<string | null>(null)

/* lifecycle hooks */
onMounted( () => {
    getPedidos()
})

/* methods & functions */
const getPedidos = async () => {
    const req = await fetch('http://localhost:3000/burgers')
    const data = await req.json()

    burgers.value = data

    getStatus()
}

const getStatus = async () => {
    const req = await fetch('http://localhost:3000/status')
    const data = await req.json()

    status.value = data
}

const deleteBurger = async (id: String) => {
    const req = await fetch(`http://localhost:3000/burgers/${id}`, {
    method: 'DELETE'
    })
    const res = await req.json()

    msg.value = 'Pedido removido com sucesso'
    setTimeout(() => msg.value = "", 3000)

    // msg (pode puxar os demais id burgers e refazer a lista sem fazer nova requisição)
    getPedidos()
}

const updateBurger = async (id: String, e: Event) => {
    const option = e.target as HTMLSelectElement
    const dataJson = JSON.stringify({
        status: option.value
    })

    const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: dataJson
    })
    const res = await req.json()

    msg.value = 'O pedido ' + id + ' foi atualizado para o status: ' + option.value
    setTimeout(() => msg.value = "", 3000)
}
</script>
        
<style scoped typed="scss">
    #burger-table {
        max-width: 1200px;
        margin: 0 auto;
    }

    #burger-table-heading, #burger-table-rows,
    .burger-table-row {
        display: flex;
        flex-wrap: wrap;
    }

    #burger-table-heading {
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #333;

        div {
            width: 19%;
        }
    }

    .burger-table-row {
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #ccc;

        div {
            width: 19%;
        }
    }

    #burger-table-heading .order-id,
    .burger-table-row .order-number {
        width: 5%;
    }

    select {
        padding: 12px 6px;
        margin-right: 12px;
    }

    .delete-btn {
        background-color: #222;
        color: #fcba03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;

        &:hover {
            background-color: transparent;
            color: #222;
        }
    }
</style>
