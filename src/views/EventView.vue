<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The Counter is : {{ counter }}</p>
    </div>
    <div>
        <button type="button" @click="setCount(7)">Set 7</button>
        <p>The Counter is : {{ counter1 }}</p>
    </div>
    <div>
        <button type="button" @click="one(), two()">Click</button>
    </div>
    <div>
        <select v-model="selectedValue" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
    </div>
    <div>
        <input @keyup.enter="submit" />
        
        <!-- Alt + Enter -->
        <input @keyup.alt.enter="clear" />

        <!-- Ctrl + Click -->
        <div @click.ctrl="doSomething">Do Something</div>

    </div>
</template>

<script>
export default{
    data(){
        return {
            counter: 0,
            counter1: 0,
            selectedValue: '',
        };
    },
    methods: {
        increaseCounter(){
            this.counter = this.counter + 1;
        },
        setCount(counter){
            this.counter1 = counter
        },
        one(){
            alert('One');
        },
        two(){
            alert('Two');
        },
        changeSelect(){
            alert(this.selectedValue);
        }

    }
}
</script>