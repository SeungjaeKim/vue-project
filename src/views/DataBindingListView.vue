<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.delivery_price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            productList: []
        };
    },
    created() {
        this.getList();
    },
    methods: {
        async getList(){
            this.productList = await this.$api("https://2f73c42f-442e-4875-92cb-bc654f6e3b95.mock.pstmn.io/list", "get");
        }
    }
}
</script>
<style>
table{
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, Helvetica, sans-serif;
    }
    td, th{
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;

    }
</style>