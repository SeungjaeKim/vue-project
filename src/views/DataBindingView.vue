<template>
    <h1>Hello, {{title}}</h1>
    <div>
        <input type="text" v-model="valueModel" />
    </div>
    <div>
        <input type="number" v-model.number="numberModel" />
    </div>
    <div>
        <textarea v-model="message"></textarea>
    </div>
    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select>
    </div>
    <div>
        <label><input type="checkbox" v-model="checked" value="서울"/>서울</label>
        <label><input type="checkbox" v-model="checked" value="부산"/>부산</label>
        <label><input type="checkbox" v-model="checked" value="제주"/>제주</label>
        <br/>
        <span>체크한 지역: {{ checked }}</span>
    </div>
    <div>
        <label><input type="radio" v-model="picked" v-bind:value="radioValue1" />서울</label>
        <label><input type="radio" v-model="picked" v-bind:value="radioValue2" />부산</label>
        <label><input type="radio" v-model="picked" v-bind:value="radioValue3" />제주</label>
        <br/>
        <span>선택한 지역: {{ picked }}</span>
    </div>
    <div>
        <img v-bind:src="imgSrc"/>
    </div>
    <div>
        <input type="text" v-model="textValue" />
        <button type="button" v-bind:disabled="textValue ==''">Click</button>
    </div>
    <div class="container" v-bind:class="{
        'active' : isActive, 'text-red' : hasError
    }">
        Class Binding
    </div>
    <div v-bind:style="styleObject">
        인라인 스타일 바인딩
    </div>
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
    <div>
        <h1 v-if="type == 'A'">A</h1>
        <h1 v-else-if="type == 'B'">B</h1>
        <h1 v-else>C</h1>
    </div>
    <div>
        <h1 v-show="bShow">bShow가 true이면, 현재 블록이 화면에 보이게 됩니다.</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: 'World',
            valueModel: 'South Korea',
            numberModel: 17,
            message: "여러 줄을 입력할 수 있는 textarea입니다.",
            city: '064',
            checked: [],
            picked: '',
            radioValue1: '서울',
            radioValue2: '부산',
            radioValue3: '제주',
            imgSrc: "https://vuejs.org/images/logo.png",
            textValue: "",
            isActive: true,
            hasError: false,
            styleObject: {
                color: 'red',
                fontSize: '13px'
            },
            productList: [
                {"product_name": "기계식키보드", "price": 25000, "category": "노트북/태블릿", "delivery_price": 5000},
                {"product_name": "무선마우스", "price": 12000, "category": "노트북/태블릿", "delivery_price": 5000},
                {"product_name": "아이패드", "price": 725000, "category": "노트북/태블릿", "delivery_price": 5000},
                {"product_name": "무선충전기", "price": 42000, "category": "노트북/태블릿", "delivery_price": 5000},
                {"product_name": "태블릿거치대", "price": 32000, "category": "노트북/태블릿", "delivery_price": 5000},
            ],
            type: 'B',
            bShow: true,

        };
    }
}
</script>
<style scoped>
    .container {
        width: 100%;
        height: 200px;
    }
    .active {
        background-color: yellow;
        font-weight: bold;
    }
    .text-red {
        color: red;
    }

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